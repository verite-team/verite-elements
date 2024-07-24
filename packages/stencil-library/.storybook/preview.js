// THIS DOES NOT WORK IN LATEST STORYBOOK + STENCIL - fix https://github.com/storybookjs/storybook/issues/24401#issuecomment-2244055661
// import { defineCustomElements } from '../loader'
// defineCustomElements()

/** @type { import('@storybook/web-components').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
