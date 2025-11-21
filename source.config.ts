import { defineConfig, defineDocs } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});

export const docs = defineDocs({
  dir: 'content/docs',
});
