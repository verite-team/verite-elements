import { setI18nStore } from './stores/i18n'
import { VeriteConfig } from './types'
import { createI18nStore } from './utils/i18n'

declare global {
  interface Window {
    vui?: Vui
  }
}

interface Vui {
  configure: (config?: VeriteConfig) => Promise<void>
  t: (key: string, interpolations?: Record<string, string>) => string
}

class Vui implements Vui {
  #isInitialized = false

  get isInitialized() {
    return this.#isInitialized
  }

  configure = async (config?: VeriteConfig) => {
    const i18nInstance = createI18nStore({ ...(config?.i18n ?? {}) })
    setI18nStore(i18nInstance)
    this.t = i18nInstance.t.bind(i18nInstance)
    this.#isInitialized = true
    await i18nInstance.waitUntilReady
  }
}

// Create the global interface but don't initialize the i18n store yet
if (typeof window !== 'undefined' && !window.vui) {
  window.vui = new Vui()
}

let initPromise: Promise<void> | null = null

export const init = async (config?: VeriteConfig) => {
  if (!initPromise) {
    initPromise = (async () => {
      if (window.vui?.isInitialized) {
        return
      }

      await window.vui?.configure(config)
    })()
  }
  return initPromise
}

export default init
