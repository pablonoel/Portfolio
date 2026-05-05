import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://www.pablonoel.com',
  integrations: [react(), sitemap()],
  compressHTML: true,
  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: 'esbuild',
    },
  },
})
