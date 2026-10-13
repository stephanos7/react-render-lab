import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: command === 'build'
      ? {
          'react-dom/client': 'react-dom/profiling',
        }
      : {},
  },

})
