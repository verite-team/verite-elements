import { Build, getAssetPath } from '@stencil/core'
import { PluralType, TranslateFn, TranslatorOptions } from './types'

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

const fetchLocale = Build?.isTesting
  ? async () => ({})
  : async (locale: string): Promise<Record<string, string>> => {
      const response = await fetch(getAssetPath(`/assets/locales/${locale}.json`))
      const data = await response.json()
      // Flatten the nested structure
      const flattened = flattenObject(data)
      return flattened
    }

const defaultOptions: Required<TranslatorOptions> = {
  availableLocales: ['en'],
  defaultLocale: 'en',
  fetchLocale,
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

export const createI18nStore = (givenOptions: TranslatorOptions) => {
  const options = fillOptions(givenOptions)

  // Flatten any provided translations
  let translations = givenOptions.translations ? flattenObject(givenOptions.translations) : {}

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

  const locale = createLocale(options.locale, async newLocale => {
    loadTranslations(await options.fetchLocale(newLocale))
  })

  // Initialize translations
  const waitUntilReady: Promise<void> = locale.set(locale.get(), true)

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
  }
}
