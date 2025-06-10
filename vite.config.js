import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/PhotographyWebsite/', // Für GitHub Pages: Name des Repos mit / am Anfang und Ende
  plugins: [react()],
})
