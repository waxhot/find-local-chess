// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig(({ command }) => ({
  site: command === 'dev' ? 'http://localhost:4321' : 'https://dtm5011.github.io',
  base: command === 'dev' ? '' : '/find-local-chess',
}));
