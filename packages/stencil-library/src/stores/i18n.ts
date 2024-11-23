import config from '../i18n.config'
import { createI18nStore } from '../utils/i18n'

let instance: ReturnType<typeof createI18nStore>

export const getI18nStore = () => {
  if (!instance) {
    instance = createI18nStore(config)
  }
  return instance
}

// export const initI18nStore = async () => {
//   const store = getI18nStore()
//   await store.initialize()
//   return store
// }

export const setI18nStore = (newInstance: ReturnType<typeof createI18nStore>) => {
  instance = newInstance
  return instance.initialize()
}
