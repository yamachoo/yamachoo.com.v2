import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import remarkCodeTitles from 'remark-code-titles'
import remarkExternalLinks from 'remark-external-links'

// https://astro.build/config
export default defineConfig({
  site: 'https://yamachoo.com/',
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed'
    },
    remarkPlugins: [remarkCodeTitles, remarkExternalLinks],
    extendDefaultPlugins: true
  }
})
