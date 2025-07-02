import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Recurse ML | Documentation',
  tagline: 'Catch the bugs your tests miss',
  favicon: 'img/favicon.ico',
  customFields: {
    shortTitle: 'Recurse ML',
  },


  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.recurse.ml',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'recurse-ml', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'rml-cli',
        path: 'docs/rml-cli',
        routeBasePath: 'rml-cli',
        sidebarPath: './sidebars.ts',
        lastVersion: 'current',
      }]
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'github-app',
          sidebarPath: './sidebars.ts',
          path: 'docs/github-app',
          lastVersion: 'current',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // TODO: Replace with your Recurse ML social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Recurse ML Docs',
      logo: {
        alt: 'Recurse ML Logo',
        // TODO: Replace with Recurse ML logo
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/github-app/',
          label: 'GitHub App',
          position: 'left',
        },
        {
          to: '/rml-cli/',
          label: 'RML CLI',
          position: 'left',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/recurse-ml/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'GitHub App Documentation',
              to: '/github-app/',
            },
            {
              label: 'RML CLI Documentation',
              to: '/rml-cli/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/AREwNQfy',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/recurse-ml/',
            },
            {
              label: 'X',
              href: 'https://x.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://blog.recurse.ml/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/recurse-ml',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Recurse ML`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
