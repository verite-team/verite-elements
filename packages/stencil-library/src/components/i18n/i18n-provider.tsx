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

  @Prop() locale: string
  @Prop() translations?: Translation | string
  @Prop() loadTranslations?: (locale: string) => Promise<Translation>
  @Prop() translationsPath?: string = '/locales/{locale}.json'
  @Prop() fallbackLocale?: string

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

  @Watch('locale')
  async handleLocaleChange() {
    await this.loadCurrentTranslations()
  }

  async componentWillLoad() {
    this.el.__provider = this
    await this.loadCurrentTranslations()
    this.resolveReady()
  }

  disconnectedCallback() {
    delete this.el.__provider
  }

  private async loadCurrentTranslations() {
    this.isLoading = true

    try {
      // Check cache first
      const cached = this.translationCache.get(this.locale)
      if (cached) {
        this.currentTranslations = cached
        this.translationsLoaded.emit()
        return
      }

      let rawTranslations: Translation = {}

      // Try loading translations for current locale
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
        // If fallback locale is set and different from current locale, try loading fallback
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

      // Cache the translations
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

  /**
   * Translates a key or returns the literal if it's not a translation key
   * Supports:
   * - Literals: "Hello, world"
   * - Translation keys: "$hello"
   * - Nested paths: "$path.to.translation"
   * - Parameters: "$hello|name:John"
   */
  private translate(input: string, defaultParams?: Record<string, string>): string {
    // If not a translation key, return as literal
    if (!input?.startsWith('$')) {
      return input
    }

    // Remove the $ prefix
    const withoutPrefix = input.slice(1)

    // Split into translation key and params
    const [translationKey, ...paramParts] = withoutPrefix.split('|')

    // Parse inline parameters
    const inlineParams = paramParts.reduce(
      (acc, param) => {
        const [key, value] = param.split(':')
        acc[key] = value
        return acc
      },
      {} as Record<string, string>
    )

    // Merge default params with inline params
    const params = { ...defaultParams, ...inlineParams }

    // Get translation or wrap key in square brackets if not found
    const translation = this.currentTranslations[translationKey] || `[${translationKey}]`

    // Replace parameters if any
    if (Object.keys(params).length > 0) {
      return translation.replace(/\{(\w+)\}/g, (_, key) => params[key] || `{${key}}`)
    }

    return translation
  }

  /**
   * Static method to find the nearest provider from any element
   * Traverses through shadow DOM boundaries
   */
  static getClosestProvider(element: HTMLElement): I18nProvider | null {
    // First try in the same shadow root
    const providerElement = element.closest('vui-i18n-provider') as HTMLVuiI18nProviderElement
    if (providerElement?.__provider) {
      return providerElement.__provider
    }

    // If not found, traverse up through shadow boundaries
    let currentElement: Element | null = element
    while (currentElement) {
      // Check if we're in a shadow root
      const shadowRoot = currentElement.getRootNode() as ShadowRoot
      if (shadowRoot instanceof ShadowRoot) {
        // Try to find provider in the shadow root's host element's context
        const hostProvider = (shadowRoot.host.closest('vui-i18n-provider') as HTMLVuiI18nProviderElement)?.__provider
        if (hostProvider) {
          return hostProvider
        }
        // Move up to the host element to continue searching
        currentElement = shadowRoot.host
      } else {
        // We're in the light DOM, do one final check
        const lightProvider = (currentElement.closest('vui-i18n-provider') as HTMLVuiI18nProviderElement)?.__provider
        return lightProvider || null
      }
    }

    return null
  }

  /**
   * Public method for child components to use
   */
  public getTranslation(input: string, params?: Record<string, string>): string {
    return this.translate(input, params)
  }

  /**
   * Public method for child components to wait for translations
   */
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
