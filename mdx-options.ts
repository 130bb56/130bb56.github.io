import type { Options } from '@mdx-js/rollup';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkMath from 'remark-math';

export const mdxOptions = {
  remarkPlugins: [remarkMath],
  rehypePlugins: [
    rehypeKatex,
    [
      rehypePrettyCode,
      {
        theme: {
          light: 'github-light',
          dark: 'github-dark',
        },
        keepBackground: false,
      },
    ],
  ],
} satisfies Options;
