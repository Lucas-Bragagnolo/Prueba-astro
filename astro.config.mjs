// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', // 👈 activa SSR
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
});