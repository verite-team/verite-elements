import { dirname, join } from 'path'

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
    // getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('storybook-dark-mode'),
    '@storybook/addon-actions',
    '@ljcl/storybook-addon-cssprops',
  ],
  framework: {
    name: getAbsolutePath('@storybook/web-components-vite'),
    options: {},
  },
  // parameters: {
  //   docs: {
  //     source: {
  //       transform: code => code.replace(/&lt;/g, '<').replace(/&gt;/g, '>'),
  //     },
  //   },
  // },
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
  previewHead: head => `
    ${head}
    <script type="module" src="./../www/build/stencil-library.esm.js"></script>
    <link rel="stylesheet" href="../src/themes/index.css">
    <link rel="stylesheet" href="../.storybook/index.css">
  `,
}
export default config
