// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      logo: {
        src: "./src/assets/logo-dark.png",
        light: "./src/assets/logo.png",
        alt: "logo"
      },
			title: '',
			social: {
          github: 'https://github.com/Rapid-ui-com',
			},
			sidebar: [
          {
            label: 'Get started',
            slug: 'index'
          },
          {
            label: 'Installation',
            slug: 'installation'
          },
          {
              label: 'Guides',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: 'Example Guide', slug: 'guides/example' },
              ],
          },
          {
              label: 'Reference',
              autogenerate: { directory: 'reference' },
          },
			],
  }), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});