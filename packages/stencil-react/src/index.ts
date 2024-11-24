import { VeriteConfig, initialize as initializeLibrary } from 'stencil-library'

import { defineCustomElements } from 'stencil-library/loader'
// export * from 'stencil-library'
// export { defineCustomElements } from 'stencil-library/loader'
export * from './components/stencil-generated'

export const initialize = async (config?: VeriteConfig) => {
  defineCustomElements()
  await initializeLibrary(config)
}
