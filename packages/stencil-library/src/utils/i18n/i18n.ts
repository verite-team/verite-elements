import { PluralType, TranslateFn, TranslatorOptions } from './types'

import { Build } from '@stencil/core'
import { bestLocale } from './bestLocale'
import { createLocale } from './locale'

// Add a flatten utility function
const flattenObject = (obj: Record<string, any>, prefix = ''): Record<string, string> => {
  return Object.keys(obj).reduce((acc: Record<string, string>, key: string) => {
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(acc, flattenObject(obj[key], prefixedKey))
    } else {
      acc[prefixedKey] = obj[key]
    }

    return acc
  }, {})
}

export interface I18nConfig {
  assetsPath?: string
  translations?: Record<string, any>
  locale?: string
  // Add a custom fetch function option
  fetchTranslations?: (locale: string) => Promise<Record<string, any>>
}

const defaultFetchLocale = (assetsPath: string) =>
  Build?.isTesting
    ? async () => ({})
    : async (locale: string): Promise<Record<string, string>> => {
        try {
          // Use the provided path or fallback to a relative path
          const path = assetsPath ? assetsPath.replace('{locale}', locale) : `/assets/locales/${locale}.json`

          const response = await fetch(path)
          if (!response.ok) {
            console.warn(`Failed to fetch translations: ${response.statusText}`)
            return {}
          }
          const data = await response.json()
          return flattenObject(data)
        } catch (error) {
          console.warn('Error fetching translations:', error)
          return {}
        }
      }

const defaultOptions: Required<TranslatorOptions> = {
  availableLocales: ['en'],
  defaultLocale: 'en',
  fetchLocale: defaultFetchLocale(''),
  interpolateValues: (str: string, interpolations: Record<string, string>): string =>
    str
      .replace(/\{([^}\s]+?)\}/g, (match, id, offset) => (str.charAt(offset - 1) === '\\' ? match : interpolations[id]))
      .replace('\\{', '{'),
  keyWithPlural: (_, key: string, pluralType: PluralType) => `${key}.${pluralType}`,
  locale: 'en',
  localeList: typeof navigator === 'undefined' ? ['en'] : (navigator.languages ?? ['en']),
  pluralFor: (locale: string, n: number) => new Intl.PluralRules(locale).select(n),
  translations: {},
  translationForMissingKey: (_, key) => `***${key}***`,
}

const fillOptions = (options: TranslatorOptions): Required<TranslatorOptions> => {
  const fullOptions = {
    ...defaultOptions,
    ...options,
  }

  fullOptions.defaultLocale = options.defaultLocale ?? fullOptions.availableLocales[0] ?? 'en'

  fullOptions.locale =
    options.locale ?? bestLocale(fullOptions.localeList, fullOptions.availableLocales, fullOptions.defaultLocale)

  return fullOptions
}

export const createI18nStore = (givenOptions: TranslatorOptions & I18nConfig) => {
  const options = fillOptions({
    ...givenOptions,
    fetchLocale: givenOptions.fetchTranslations
      ? givenOptions.fetchTranslations
      : givenOptions.assetsPath
        ? defaultFetchLocale(givenOptions.assetsPath)
        : defaultOptions.fetchLocale,
  })

  let translations = givenOptions.translations ? flattenObject(givenOptions.translations) : {}

  // Create a deferred promise that we can resolve later
  let resolveReady: () => void
  const waitUntilReady = new Promise<void>(resolve => {
    resolveReady = resolve
  })

  const locale = createLocale(options.locale, async newLocale => {
    loadTranslations(await options.fetchLocale(newLocale))
  })

  // Initialize translations only when explicitly called
  const initialize = async () => {
    await locale.set(locale.get(), true)
    resolveReady()
  }

  const loadTranslations = (newTranslations: Record<string, string>) => {
    // Flatten new translations before storing
    translations = flattenObject(newTranslations)
  }

  const addTranslations = (newTranslations: Record<string, string>) => {
    loadTranslations({
      ...translations,
      ...newTranslations,
    })
  }

  const hasKey = (key: string) => key in translations

  const translate: TranslateFn = (
    key: string,
    intOrNumber?: Record<string, string> | number,
    maybeMagicNumber?: number
  ): string => {
    const currentLocale = locale.get()

    const [interpolations, magicNumber] =
      typeof intOrNumber === 'number' ? [{}, intOrNumber] : [intOrNumber, maybeMagicNumber]

    if (magicNumber !== undefined) {
      const pluralType = options.pluralFor(currentLocale, magicNumber)
      key = options.keyWithPlural(currentLocale, key, pluralType)
    }

    if (key in translations) {
      const translatedValue = translations[key]
      if (interpolations) {
        return options.interpolateValues(translatedValue, interpolations)
      }
      return translatedValue
    }

    return options.translationForMissingKey(currentLocale, key, translations)
  }

  const translateIfNeeded = (text: string): string => {
    if (!text || typeof text !== 'string') return text
    if (text.startsWith('$')) {
      return translate(text.substring(1))
    }
    return text
  }

  return {
    /**
     * Add translations without removing the previous set (though it might override).
     */
    addTranslations,

    /**
     * Check if a key is present in the loaded translations.
     */
    hasKey,

    /**
     * Loads the new set of translations removing the previous set.
     */
    loadTranslations,

    /**
     * Current locale store.
     */
    locale,

    /**
     * Translates the given key with the given interpolations.
     *
     * It can also pluralize.
     */
    t: translate,

    /**
     * Promise resolved when the first set of translations are loaded.
     *
     * When top-level awaits are better supported, this will go.
     */
    waitUntilReady,

    /**
     * Translate a string if it starts with a dollar sign.
     */
    tif: translateIfNeeded,

    initialize, // Export the initialize function
  }
}
