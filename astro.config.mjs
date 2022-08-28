import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import remarkCodeTitles from 'remark-code-titles'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed'
    },
    remarkPlugins: [remarkCodeTitles],
    extendDefaultPlugins: true
  }
})
