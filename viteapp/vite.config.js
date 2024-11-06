import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    trackswitch({
      input: [
        'assets/js/trackswitch.js',
        'assets/js/trackswitch.min.js',
      ],
      refresh: true,
    }),
  ],
})
