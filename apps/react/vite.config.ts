import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['../server/**/*'],
      output: {
        manualChunks(id) {
          if (id.includes('verite') || id.includes('vui')) {
            return 'verite'
          }
        },
      },
    },
  },
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     'stencil-library': path.resolve(__dirname, '../packages/stencil-library/dist'),
  //   },
  // },
})
