import { ValueAccessorConfig, angularOutputTarget } from '@stencil/angular-output-target'

import { Config } from '@stencil/core'
import { reactOutputTarget } from '@stencil/react-output-target'

const angularValueAccessorBindings: ValueAccessorConfig[] = []

export const config: Config = {
  namespace: 'stencil-library',
  hashFileNames: true,
  invisiblePrehydration: true,
  extras: {
    enableImportInjection: true,
  },
  srcDir: 'src',
  globalStyle: 'src/themes/index.css',
  // globalScript: 'src/global.ts',
  outputTargets: [
    {
      type: 'dist',
      // esmLoaderPath: '../loader',
      copy: [
        {
          src: 'themes', // This will copy the entire global directory
          dest: 'themes',
        },
        {
          src: 'assets', // This will copy the entire global directory
          dest: 'assets',
        },
      ],
    },
    {
      type: 'docs-vscode',
      file: 'vscode-data.json',
    },
    reactOutputTarget({
      componentCorePackage: 'stencil-library',
      // proxiesFile: './dist/frameworks/verite-react/index.ts',
      // includePolyfills: true,

      proxiesFile: '../stencil-react/src/components/stencil-generated/index.ts',
      // customElementsDir: 'dist/components',
      // includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: 'stencil-library',
      // outputType: 'standalone',
      // directivesProxyFile: './dist/frameworks/verite-angular/index.ts',
      // outputType: 'component',
      directivesProxyFile: '../stencil-angular/src/components/stencil-generated/index.ts',
      // valueAccessorConfigs: angularValueAccessorBindings,
    }),
    // {
    //   type: 'dist-custom-elements',
    //   // customElementsExportBehavior: 'auto-define-custom-elements',
    //   // externalRuntime: false,
    // },
    // {
    //   type: 'docs-readme',
    // },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: '../index.css',
          dest: 'index.css',
        },
        {
          src: '../index.js',
          dest: 'index.js',
        },
      ],
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
}
