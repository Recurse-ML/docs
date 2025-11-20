import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Recurse ML Docs',
  },
  links: [
    {
      text: 'GitHub App',
      url: '/gh',
    },
    {
      text: 'RML CLI',
      url: '/rml',
    },
    {
      text: 'REMCP',
      url: '/remcp',
    },
  ],
  githubUrl: 'https://github.com/recurse-ml/docs',
};
