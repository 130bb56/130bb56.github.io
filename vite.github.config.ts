import mdx from '@mdx-js/rollup';
import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { mdxOptions } from './mdx-options';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: resolve(projectRoot, 'github-pages'),
  base: '/',
  publicDir: resolve(projectRoot, 'public'),
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [
    { enforce: 'pre', ...mdx(mdxOptions) },
    react({ include: /\.(js|jsx|md|mdx|ts|tsx)$/ }),
  ],
  build: {
    outDir: resolve(projectRoot, 'dist-pages'),
    emptyOutDir: true,
  },
});
