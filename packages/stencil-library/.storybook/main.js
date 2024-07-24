import { dirname, join } from 'path'

// import fs from 'fs'
// import { mergeConfig } from 'vite'
// import path from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: [{ from: '../dist/stencil-library', to: '/assets' }],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    // '@storybook/addon-knobs',
    '@storybook/addon-actions',
  ],
  framework: {
    name: getAbsolutePath('@storybook/web-components-vite'),
    options: {},
  },
  // AUTO RELOAD DOES NOT WORK IN LATEST STORYBOOK + STENCIL - fix https://github.com/storybookjs/storybook/issues/24401#issuecomment-2244055661
  previewHead: head => `
    ${head}
    <script type="module" src="./../www/build/stencil-library.esm.js"></script>
    `,

    // ${head}
    // <script type="module" src="./../www/build/stencil-library.esm.js"></script>
    // <link rel="stylesheet" href="assets/stencil-library.css">
    // `,
  // HACK: fix for stenciljs components - https://github.com/storybookjs/storybook/issues/22124
  // async viteFinal(config, { configType }) {
  //   if (configType === 'DEVELOPMENT') {
  //     console.log('🍉 viteFinal')
  //     const stencilBuildOutputPath = path.resolve(__dirname, '../www/build')
  //     console.log('🍉 stencilBuildOutputPath', stencilBuildOutputPath)

  //     fs.watch(stencilBuildOutputPath, { recursive: true }, (eventType, filename) => {
  //       console.log('🍉 eventType', eventType)
  //       if (eventType === 'change') {
  //         const now = new Date()
  //         fs.utimesSync(stencilBuildOutputPath, now, now)
  //       }
  //     })
  //   }

  //   return mergeConfig(config, {
  //     // plugins
  //   })
  // },
}
export default config
