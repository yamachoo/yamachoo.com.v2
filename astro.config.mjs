import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import remarkCodeTitles from 'remark-code-titles'
import remarkExternalLinks from 'remark-external-links'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed'
    },
    remarkPlugins: [remarkCodeTitles, remarkExternalLinks],
    extendDefaultPlugins: true
  }
})
