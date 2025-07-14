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
  organizationName: 'Recurse-ML', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'rml',
        path: 'docs/rml',
        routeBasePath: 'rml',
        sidebarPath: './sidebars.ts',
        lastVersion: 'current',
      }],

  ],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'gh',
          sidebarPath: './sidebars.ts',
          path: 'docs/gh',
          lastVersion: 'current',
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "name": "Recurse ML Documentation",
        "url": "https://docs.recurse.ml",
        "publisher": {
          "@type": "Organization",
          "name": "Recurse ML"
        }
      }),
    },
  ],
  scripts: [
    {
      src: '/firebase-init.js',
      type: 'module',
    },
  ],

  themeConfig: {
    // TODO: Replace with your Recurse ML social card
    image: 'img/recurse-social-card.jpg',
    metadata: [
      { name: 'keywords', content: 'static analysis, bug detection, AI code review, Recurse ML, code quality, GitHub App, CLI, documentation' },
      { name: 'description', content: 'Recurse ML documentation. Next-gen static analysis for code quality, bug detection, and AI-powered code review.' },
      { property: 'og:title', content: 'Recurse ML | Documentation' },
      { property: 'og:description', content: 'Catch the bugs your tests miss. Next-gen static analysis for code quality and bug detection.' },
      { property: 'og:image', content: 'https://docs.recurse.ml/img/recurse-social-card.jpg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://docs.recurse.ml' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Recurse ML | Documentation' },
      { name: 'twitter:description', content: 'Catch the bugs your tests miss. Next-gen static analysis for code quality and bug detection.' },
      { name: 'twitter:image', content: 'https://docs.recurse.ml/img/recurse-social-card.jpg' }
    ],
    navbar: {
      title: 'Recurse ML Docs',
      logo: {
        alt: 'Recurse ML Logo',
        src: 'img/recurse-logo-light.svg',
        srcDark: 'img/recurse-logo-dark.svg',
        height: 24,
        width: 24,
      },
      items: [
        {
          to: '/gh/',
          label: 'GitHub App',
          position: 'left',
        },
        {
          to: '/rml/',
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
              to: '/gh/',
            },
            {
              label: 'RML CLI Documentation',
              to: '/rml/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/mVbG4CBaRg',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/recurse-ml/',
            },
            {
              label: 'X',
              href: 'https://x.com/RecurseML',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://blog.recurse.ml',
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
