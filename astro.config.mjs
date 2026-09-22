import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkMath from 'remark-math';

export default defineConfig({
  site: 'https://130bb56.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: false,
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        rehypeKatex,
        [
          rehypePrettyCode,
          {
            theme: { light: 'github-light', dark: 'github-dark' },
            keepBackground: false,
          },
        ],
      ],
    }),
  },
});
