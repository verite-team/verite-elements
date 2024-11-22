export const bestLocale = (
  localeList: readonly string[],
  availableLocales: readonly string[],
  defaultLocale: string
): string => {
  const availableSet = new Set(availableLocales)

  for (const locale of localeList) {
    if (availableSet.has(locale)) return locale

    if (locale.length > 2) {
      const regionNeutralLocale = locale.slice(0, 2)
      if (availableSet.has(regionNeutralLocale)) {
        return regionNeutralLocale
      }
    }
  }

  return defaultLocale
}
