import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [
    vue({
      // Asegurar que el template compiler funciona
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('vue-')
        }
      }
    })
  ],
  // Base dinámica: funciona en local y en GitHub Pages
  //base: process.env.NODE_ENV === 'production' ? '/nuevacumbre/' : '/',   para alternar alojamiento local y en GitHub Pages
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    watch: {
      usePolling: true // Para Windows
    }
  },
  optimizeDeps: {
    include: ['vue', 'pinia', 'vue-i18n', '@emailjs/browser']
  }
})
