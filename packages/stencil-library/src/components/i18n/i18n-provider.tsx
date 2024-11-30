import { Component, Element, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core'

export interface Translation {
  [key: string]: string | Translation
}

interface HTMLVuiI18nProviderElement extends HTMLElement {
  __provider?: I18nProvider
}

@Component({
  tag: 'vui-i18n-provider',
  shadow: false,
})
export class I18nProvider {
  @Element() el!: HTMLVuiI18nProviderElement

  @Prop() locale?: string
  @Prop() translations?: Translation | string
  @Prop() loadTranslations?: (locale: string) => Promise<Translation>
  @Prop() translationsPath?: string = '/locales/{locale}.json'
  @Prop() fallbackLocale?: string
  @Prop() supportedLocales?: string[] | string

  @State() private currentTranslations: Record<string, string> = {}
  @State() private isLoading: boolean = false

  @Event() translationsLoaded: EventEmitter<void>

  private readyPromise: Promise<void>
  private resolveReady: () => void
  private translationCache = new Map<string, Record<string, string>>()

  constructor() {
    this.readyPromise = new Promise(resolve => {
      this.resolveReady = resolve
    })
  }

  private getSupportedLocales(): string[] {
    if (!this.supportedLocales) {
      return []
    }

    if (typeof this.supportedLocales === 'string') {
      return this.supportedLocales.split(',').map(locale => locale.trim())
    }

    return this.supportedLocales
  }

  private getPreferredLocale(): string {
    const supported = this.getSupportedLocales()
    console.log('supported', supported)
    if (this.locale) {
      if (!supported.length || supported.includes(this.locale)) {
        return this.locale
      }
      console.warn(`Locale "${this.locale}" is not supported. Falling back to "${this.fallbackLocale || 'en'}"`)
    }

    const htmlLang = document.documentElement.lang
    if (htmlLang) {
      if (!supported.length || supported.includes(htmlLang)) {
        return htmlLang
      }
    }

    const browserLocales = navigator.languages || [navigator.language]
    for (const browserLocale of browserLocales) {
      if (!supported.length || supported.includes(browserLocale)) {
        return browserLocale
      }
    }

    return this.fallbackLocale || 'en'
  }

  @Watch('locale')
  async handleLocaleChange() {
    await this.loadCurrentTranslations()
  }

  async componentWillLoad() {
    this.el.__provider = this
    if (!this.locale) {
      this.locale = this.getPreferredLocale()
    }
    await this.loadCurrentTranslations()
    this.resolveReady()
  }

  disconnectedCallback() {
    delete this.el.__provider
  }

  private async loadCurrentTranslations() {
    this.isLoading = true

    try {
      const cached = this.translationCache.get(this.locale)
      if (cached) {
        this.currentTranslations = cached
        this.translationsLoaded.emit()
        return
      }

      let rawTranslations: Translation = {}

      try {
        if (this.translations) {
          rawTranslations = typeof this.translations === 'string' ? JSON.parse(this.translations) : this.translations
        } else if (this.loadTranslations) {
          rawTranslations = await this.loadTranslations(this.locale)
        } else if (this.translationsPath) {
          const path = this.translationsPath.replace('{locale}', this.locale)
          const response = await fetch(path)
          if (!response.ok) {
            throw new Error(`Failed to fetch translations: ${response.statusText}`)
          }
          rawTranslations = await response.json()
        }
      } catch (error) {
        if (this.fallbackLocale && this.fallbackLocale !== this.locale) {
          console.warn(`Failed to load translations for ${this.locale}, falling back to ${this.fallbackLocale}`)
          if (this.translations) {
            rawTranslations = typeof this.translations === 'string' ? JSON.parse(this.translations) : this.translations
          } else if (this.loadTranslations) {
            rawTranslations = await this.loadTranslations(this.fallbackLocale)
          } else if (this.translationsPath) {
            const path = this.translationsPath.replace('{locale}', this.fallbackLocale)
            const response = await fetch(path)
            if (!response.ok) {
              throw new Error(`Failed to fetch fallback translations: ${response.statusText}`)
            }
            rawTranslations = await response.json()
          }
        } else {
          throw error
        }
      }

      const flattened = this.flattenTranslations(rawTranslations)

      this.translationCache.set(this.locale, flattened)

      this.currentTranslations = flattened
      this.translationsLoaded.emit()
    } catch (error) {
      console.error('Failed to load translations:', error)
      this.currentTranslations = {}
    } finally {
      this.isLoading = false
    }
  }

  private flattenTranslations(obj: Record<string, any>, prefix = ''): Record<string, string> {
    return Object.entries(obj).reduce(
      (acc, [key, value]) => {
        const newKey = prefix ? `${prefix}.${key}` : key

        if (typeof value === 'object' && value !== null) {
          Object.assign(acc, this.flattenTranslations(value, newKey))
        } else {
          acc[newKey] = value.toString()
        }

        return acc
      },
      {} as Record<string, string>
    )
  }

  private translate(input: string, defaultParams?: Record<string, string>): string {
    if (!input?.startsWith('$')) {
      return input
    }

    const withoutPrefix = input.slice(1)

    const [translationKey, ...paramParts] = withoutPrefix.split('|')

    const inlineParams = paramParts.reduce(
      (acc, param) => {
        const [key, value] = param.split(':')
        acc[key] = value
        return acc
      },
      {} as Record<string, string>
    )

    const params = { ...defaultParams, ...inlineParams }

    const translation = this.currentTranslations[translationKey] || `[${translationKey}]`

    if (Object.keys(params).length > 0) {
      return translation.replace(/\{(\w+)\}/g, (_, key) => params[key] || `{${key}}`)
    }

    return translation
  }

  static getClosestProvider(element: HTMLElement): I18nProvider | null {
    const providerElement = element.closest('vui-i18n-provider') as HTMLVuiI18nProviderElement
    if (providerElement?.__provider) {
      return providerElement.__provider
    }

    let currentElement: Element | null = element
    while (currentElement) {
      const shadowRoot = currentElement.getRootNode() as ShadowRoot
      if (shadowRoot instanceof ShadowRoot) {
        const hostProvider = (shadowRoot.host.closest('vui-i18n-provider') as HTMLVuiI18nProviderElement)?.__provider
        if (hostProvider) {
          return hostProvider
        }
        currentElement = shadowRoot.host
      } else {
        const lightProvider = (currentElement.closest('vui-i18n-provider') as HTMLVuiI18nProviderElement)?.__provider
        return lightProvider || null
      }
    }

    return null
  }

  public getTranslation(input: string, params?: Record<string, string>): string {
    return this.translate(input, params)
  }

  public async waitForTranslations(): Promise<void> {
    return this.readyPromise
  }

  render() {
    if (this.isLoading) {
      return <slot name="loader"></slot>
    }

    return <slot />
  }
}
