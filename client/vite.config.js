import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  resolve: {
    alias: {
      'react-icons': 'react-icons'
    }
  },  optimizeDeps: {
    include: ['animate.css']
  },
  css: {
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  }
})