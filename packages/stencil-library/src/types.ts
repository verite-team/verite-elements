export interface VeriteConfig {
  i18n?: {
    assetsPath?: string
    locale?: string
    translations?: Record<string, any>
    fetchTranslations?: (locale: string) => Promise<Record<string, any>>
  }
}
