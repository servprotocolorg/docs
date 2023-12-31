/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SERV protocol',
  tagline: 'A static docs website.',
  url: 'https://github.com',
  baseUrl: '/',
  organizationName: 'servprotocolorg', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Logo',
        src: 'img/servlogo_512.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'readme',
          position: 'left',
          label: 'Blockchain Docs',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/servprotocolorg',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'servprotocol',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Docs',
              to: '/docs/docs',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/servprotocolorg',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'About me',
              to: '/docs/about',
            },
            {
              label: 'Timeline',
              to: '/docs/timeline',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Blog2',
              to: '/blog2',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} MyPortfolio. Built with Docusaurus.`,
    },
  },

  themes: ['docusaurus-portfolio-theme'],
  plugins: [
    [
      'docusaurus-portfolio-plugin',
      {
        username: 'servprotocolorg',
        path: '/',
        pageTitle: 'Docs',
        pageDescription: 'About me.',
        userOptions: {},
        repoOptions: {
          type: 'all',
          sort: 'updated',
          direction: 'desc',
          numRepos: 10,
        },
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/servprotocolorg/serv-docs/edit/master/website/',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/servprotocolorg/serv-docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/servprotocolorg/serv-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
