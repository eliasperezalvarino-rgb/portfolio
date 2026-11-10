// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eliaaas.com',
  trailingSlash: 'always',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
});
