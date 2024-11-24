import type { I18nConfig } from './utils/i18n'
import { VeriteConfig } from './types'
import { getI18n } from './utils/i18n'

// declare global {
//   interface Window {
//     vui?: Vui
//   }
// }

interface Vui {
  configure: (config?: VeriteConfig) => Promise<void>
  t: (key: string, interpolations?: Record<string, string>) => string
  setLocale: (locale: string) => Promise<void>
}

class Vui implements Vui {
  #i18n: ReturnType<typeof getI18n>

  t = (key: string, interpolations?: Record<string, string>) => {
    return this.#i18n.translate(key, interpolations)
  }

  setLocale = async (locale: string) => {
    await this.#i18n.setLocale(locale)
  }

  configure = async (config?: VeriteConfig) => {
    const i18nConfig: Partial<I18nConfig> = {
      availableLocales: config?.i18n?.availableLocales,
      defaultLocale: config?.i18n?.defaultLocale,
      locale: config?.i18n?.locale,
      translationsPath: config?.i18n?.translationsPath,
      translations: config?.i18n?.translations,
      fetchTranslations: config?.i18n?.fetchTranslations,
    }

    // Initialize i18n with new config
    this.#i18n = getI18n(i18nConfig)
    await this.#i18n.initialize()
  }
}

// Create the global interface
// if (typeof window !== 'undefined' && !window.vui) {
//   window.vui = new Vui()
// }

export const initialize = async (config?: VeriteConfig) => {
  // console.log('[global] Initializing with config:', config)
  const i18n = getI18n(config?.i18n)
  await i18n.initialize()
  // console.log('[global] Initialization complete')
  return i18n
}

document.dispatchEvent(new CustomEvent('onVeriteReady', { detail: new Vui() }))

// export default init
