declare module '*.mdx' {
  import type { ComponentType } from 'react';

  export const metadata: {
    slug: string;
    title: string;
    date: string;
    displayDate: string;
    description: string;
    tags: string[];
  };

  const MDXContent: ComponentType;
  export default MDXContent;
}
