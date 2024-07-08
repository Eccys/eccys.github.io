import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '949'),
    routes: [
      {
        path: '/docs/next',
        component: ComponentCreator('/docs/next', 'e6c'),
        routes: [
          {
            path: '/docs/next',
            component: ComponentCreator('/docs/next', '198'),
            routes: [
              {
                path: '/docs/next/category/tutorial---basics',
                component: ComponentCreator('/docs/next/category/tutorial---basics', '89e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/category/tutorial---extras',
                component: ComponentCreator('/docs/next/category/tutorial---extras', 'a34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/intro',
                component: ComponentCreator('/docs/next/intro', 'ad0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/next/tutorial-basics/congratulations', '63b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/next/tutorial-basics/create-a-blog-post', '2d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/next/tutorial-basics/create-a-document', '991'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/next/tutorial-basics/create-a-page', 'dcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/next/tutorial-basics/deploy-your-site', 'b06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/next/tutorial-basics/markdown-features', 'fe4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/next/tutorial-extras/manage-docs-versions', 'fe5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/next/tutorial-extras/translate-your-site', '704'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs',
        component: ComponentCreator('/docs', '087'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '0a1'),
            routes: [
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '0ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', 'c5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '03d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '2f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'c03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'f6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '755'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
