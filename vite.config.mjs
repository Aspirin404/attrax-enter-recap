import { defineConfig } from 'vite'
import { enterDevPlugin, enterProdPlugin } from 'vite-plugin-enter-dev';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist'
  }
})
