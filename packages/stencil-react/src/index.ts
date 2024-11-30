import { defineCustomElements } from 'stencil-library/loader'
export * from './components/stencil-generated'

export const bootstrapVerite = async () => {
  defineCustomElements()
}
