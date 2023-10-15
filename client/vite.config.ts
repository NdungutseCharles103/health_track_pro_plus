import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
     port: 3032,
  },
  resolve: {
     alias: {
        '@': '/src',
        '~': '/',
        '@components': '/src/components',
        '@pages': '/src/pages',
        '@assets': '/src/assets',
     },
  },
})
