// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nahw School',
  tagline: 'Deep Arabic grammar learning grounded in classical scholarship',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://arabic.ecys.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Eccys',
  projectName: 'eccys.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Eccys/eccys.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo-favicon.png',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Nahw School',
        logo: {
          alt: 'Nahw School',
          src: 'img/logo-favicon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Sughra (Foundation)',
          },
          {
            to: '/docs/wusta-coming-soon', // Placeholder or real link if exists
            position: 'left',
            label: 'Wusta (Intermediate)',
          },
          {
            href: 'https://github.com/Eccys/eccys.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Curriculum',
            items: [
              {
                label: 'Sughra fi an Nahw',
                to: '/docs/%D9%85%D9%82%D8%AF%D9%85%D8%A9/',
              },
              {
                label: 'Wusta fi an Nahw (Coming Soon)',
                to: '#',
              },
            ],
          },
          {
            title: 'Source',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Eccys/eccys.github.io',
              },
            ],
          },
        ],
        copyright: `With gratitude to Abdullah Azmi, Al-Qalam Institute, and Ustadh Hashim Mohamed. © ${new Date().getFullYear()} Nahw School.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
