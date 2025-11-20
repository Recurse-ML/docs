import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const gh = defineDocs({
  dir: 'content/gh',
});

export const rml = defineDocs({
  dir: 'content/rml',
});

export const remcp = defineDocs({
  dir: 'content/remcp',
});

export const spx = defineDocs({
  dir: 'content/spx',
});

export default defineConfig({});
