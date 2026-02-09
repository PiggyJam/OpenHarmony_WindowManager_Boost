import type { Config } from '@docusaurus/types';
import type { Options as PresetOptions } from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenHarmony WindowManager Boost',
  tagline: 'AI 驱动的开发辅助平台',
  favicon: 'img/favicon.ico',

  url: 'https://xxx.github.io',
  baseUrl: '/OpenHarmony_WindowManager_Boost/',
  organizationName: 'xxx',
  projectName: 'OpenHarmony_WindowManager_Boost',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // Markdown config
  markdown: {
    format: 'detect',
    anchors: {
      maintainCase: true,
    },
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/xxx/OpenHarmony_WindowManager_Boost/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/xxx/OpenHarmony_WindowManager_Boost/tree/main/website/',
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      } satisfies PresetOptions,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'WM Boost',
      logo: {
        alt: 'WM Boost Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wikiSidebar',
          position: 'left',
          label: 'Wiki',
        },
        { to: '/docs/skills', label: 'Skills', position: 'left' },
        { to: '/docs/agents', label: 'Agents', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/xxx/OpenHarmony_WindowManager_Boost',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            { label: 'Wiki', to: '/docs/wiki' },
            { label: 'Skills', to: '/docs/skills' },
            { label: 'Agents', to: '/docs/agents' },
          ],
        },
        {
          title: '社区',
          items: [
            { label: 'GitHub', to: 'https://github.com/xxx/OpenHarmony_WindowManager_Boost' },
            { label: 'Discussions', to: 'https://github.com/xxx/OpenHarmony_WindowManager_Boost/discussions' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'OpenHarmony', to: 'https://www.openharmony.cn/mainPlay' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenHarmony Community. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['bash', 'cpp', 'typescript', 'java'],
    },
  } satisfies PresetOptions['themeConfig'],

  plugins: [],
};

export default config;
