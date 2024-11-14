import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     'stencil-library': path.resolve(__dirname, '../packages/stencil-library/dist'),
  //   },
  // },
})
