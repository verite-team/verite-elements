import { createStore } from '@stencil/store'

/**
 * Basic types for translation functionality
 */
export type PluralType = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other'
export type TranslationDictionary = Record<string, string>

/**
 * Configuration for the i18n system
 */
export interface I18nConfig {
  /** Available languages in your app (e.g., ['en', 'es', 'fr']) */
  availableLocales: string[]

  /** Fallback language if requested one isn't available */
  defaultLocale: string

  /** Initial language to use */
  locale?: string

  /** Path template to fetch translations (e.g., '/assets/i18n/{locale}.json') */
  translationsPath?: string

  /** Optional custom fetch function for translations */
  fetchTranslations?: (locale: string) => Promise<Record<string, any>>

  /** Initial translations (optional) */
  translations?: Record<string, any>
}

const DEFAULT_CONFIG: I18nConfig = {
  availableLocales: ['en'],
  defaultLocale: 'en',
  translationsPath: '/locales/{locale}.json',
}

/**
 * Singleton instance of the i18n store
 */
let i18nInstance: ReturnType<typeof createI18nStore> | null = null

/**
 * Cache for loaded translations
 */
const translationCache = new Map<string, TranslationDictionary>()

function isValidConfig(config?: Partial<I18nConfig>): boolean {
  if (!config) return false
  return Object.entries(config).some(([_, value]) => value !== undefined)
}

/**
 * Creates or returns the i18n store instance
 */
export function getI18n(config?: Partial<I18nConfig>) {
  // Only create/recreate instance if we have a valid config
  if (!i18nInstance || isValidConfig(config)) {
    if (i18nInstance) {
      i18nInstance.reset()
    }

    const fullConfig: I18nConfig = {
      ...DEFAULT_CONFIG,
      ...Object.entries(config || {}).reduce((acc, [key, value]) => {
        if (value !== undefined) acc[key] = value
        return acc
      }, {} as Partial<I18nConfig>),
    }

    i18nInstance = createI18nStore(fullConfig)
  }

  return i18nInstance
}

/**
 * Creates the i18n store with all necessary functionality
 */
function createI18nStore(config: I18nConfig) {
  // Create a deferred promise that we can resolve later
  let resolveReady: () => void
  const readyPromise = new Promise<void>(resolve => {
    resolveReady = resolve!
  })

  const { state, onChange } = createStore({
    locale: config.locale || config.defaultLocale,
    translations: {} as TranslationDictionary,
    isLoading: false,
    isInitialized: false,
  })

  async function loadTranslations(locale: string): Promise<TranslationDictionary> {
    // Check cache first
    const cached = translationCache.get(locale)
    if (cached) {
      return cached
    }

    // Fetch new translations
    try {
      state.isLoading = true
      let translations: Record<string, any> = {}

      // First load translations from path/fetch if available
      if (config.fetchTranslations) {
        translations = await config.fetchTranslations(locale)
      } else if (config.translationsPath) {
        const response = await fetch(config.translationsPath.replace('{locale}', locale))
        translations = await response.json()
      }

      // Merge with config translations if they exist, giving them priority
      if (config.translations) {
        translations = {
          ...flattenTranslations(translations),
          ...flattenTranslations(config.translations),
        }
      } else {
        translations = flattenTranslations(translations)
      }
      translationCache.set(locale, translations)
      return translations
    } catch (error) {
      // If there's an error, still try to use config translations if available
      return config.translations ? flattenTranslations(config.translations) : {}
    } finally {
      state.isLoading = false
    }
  }

  async function setLocale(newLocale: string) {
    if (newLocale === state.locale && state.isInitialized) return

    const translations = await loadTranslations(newLocale)
    state.translations = translations
    state.locale = newLocale

    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', newLocale)
    }
  }

  async function initialize() {
    if (!state.isInitialized) {
      try {
        await setLocale(state.locale)
        state.isInitialized = true
        resolveReady()
      } catch (error) {
        throw error
      }
    }
  }

  const translate = (key: string, params?: Record<string, string>): string => {
    const translation = state.translations[key] || `[${key}]`
    if (!params) return translation
    return translation.replace(/\{(\w+)\}/g, (_, param) => params[param]?.toString() || `{${param}}`)
  }

  const translateInterpolated = (key: string, params?: Record<string, string>): string => {
    // if key starts with $ then it's a key from the translations file
    if (key.startsWith('$')) {
      key = key.slice(1)

      // $signin.default.title|product:Acme Co
      const [translation, ...rest] = key.split('|')
      params = rest.reduce(
        (acc, param) => {
          const [key, value] = param.split(':')
          acc[key] = value
          return acc
        },
        {} as Record<string, string>
      )
      return translate(translation, params)
    }
    return key
  }

  return {
    get locale() {
      return state.locale
    },
    get isLoading() {
      return state.isLoading
    },
    get isInitialized() {
      return state.isInitialized
    },
    translate,
    translateInterpolated,
    setLocale,
    initialize,
    reset: () => {
      state.translations = {}
      state.isInitialized = false
      translationCache.clear()
    },
    waitUntilReady: () => readyPromise,
    onLocaleChange: (callback: (locale: string) => void) => onChange('locale', callback),
    onLoadingChange: (callback: (isLoading: boolean) => void) => onChange('isLoading', callback),
  }
}

/**
 * Utility to flatten nested translation objects
 */
function flattenTranslations(obj: Record<string, any>, prefix = ''): TranslationDictionary {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'object' && value !== null) {
      Object.assign(acc, flattenTranslations(value, newKey))
    } else {
      acc[newKey] = value.toString()
    }

    return acc
  }, {} as TranslationDictionary)
}
