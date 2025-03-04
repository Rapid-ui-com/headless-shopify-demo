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
            label: 'Shopify setup',
            items: [
              {label: "Configuration", slug: "shopify-setup/configure"},
              {label: "Newsletter API", slug: "shopify-setup/newsletter-api"},
              {label: "Activate multi language / currencies", slug: "shopify-setup/multiple-markets"}
            ]
          }
			],
  }), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});