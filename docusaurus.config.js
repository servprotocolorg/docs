// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

function defineSection(section, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars.js'),
      breadcrumbs: true,
      editUrl: 'https://github.com/servprotocolorg/docs/tree/main/',
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection('use'),
  defineSection('develop'),
  defineSection('validate'),
  defineSection('protocol'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SERV Docs',
  tagline: 'Develop on SERV',
  url: 'https://docs.serv.services',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'servprotocolorg', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    project: {
      name: "SERV",
      denom: "SERV",
      ticker: "SERV",
      binary: "servnode",
      testnet_denom: "SERV",
      testnet_ticker: "SERV",
      rpc_url: "https://rpc.serv.services",
      rpc_url_testnet: "https://rpc.serv.services",
      rpc_url_local: "http://localhost:8545/",
      chain_id: "43970",
      testnet_chain_id: "43970",
      latest_version: "v12.2.3",
      mainnet_version: "v12.2.3",
      testnet_version: "v12.2.3",
      version_number: "1",
      testnet_version_number: "1",
      testnet_evm_explorer_url: "https://explorer.serv.services",
      evm_explorer_url: "https://explorer.serv.services",
      testnet_cosmos_explorer_url: "",
      cosmos_explorer_url: "",
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/home',
          // routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-3JSJBBPS3L',
          anonymizeIP: false,
        },
      }),
    ],
  ],
  plugins: [
    ...SECTIONS,
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 80,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SERV Docs',
        logo: {
          href: '/',
          alt: 'SERV Logo',
          src: 'img/serv.svg',
        },
        items: [
          {
            position: 'left',
            label: 'Use',
            to: '/use',
          },
          {
            position: 'left',
            label: 'Develop',
            to: '/develop',
          },
          {
            position: 'left',
            label: 'Validate',
            to: '/validate',
          },
          {
            position: 'left',
            label: 'Protocol',
            to: '/protocol',
          },
          {
            position: 'right',
            label: 'Tools',
            to: '/develop/tools',
          },
          {
            position: 'right',
            label: 'Networks',
            to: '/develop/api/networks',
          },
          {
            position: 'right',
            label: 'App',
            to: 'https://app.serv.services',
          },
          {
            href: 'https://github.com/servprotocolorg/serv',
            className: 'pseudo-icon github-icon',
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
                label: 'Build a Dapp',
                to: '/develop/smart-contracts',
              },
              {
                label: 'Contribute to SERV',
                to: '/use',
              },
              {
                label: 'Become a Validator',
                to: '/validate',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/+pCUVkj9zd4s0MzIx',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/cXv3SnmegZ',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ServProtocol',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://forum.serv.services',
              },
              {
                label: 'SERV GitHub',
                href: 'https://github.com/servprotocolorg',
              },
            ],
          },
        ],
        copyright: `Built with ❤️ by the SERV Protocol Founding Team. © ${new Date().getFullYear()} All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: "SERV Docs", 
          content: "Official SERV Docs. Come discover why we are the the home for native, cross-chain applications."
        },
        {
          name: "author",
          content: "The SERV Protocol Founding Team @SERVProtocol"
        },
        {
          name: "keywords",
          content: "EMM, cross-chain, Cosmos SDK, IBC, fast-finality, native, cross-chain applications, EVM on Cosmos"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        }
      ],
      algolia: {
        // The application ID provided by Algolia
        appId: 'DPTADG0ME1',
  
        // Public API key: it is safe to commit it
        apiKey: 'fbbcf85b58f500e5e4d301f9730f3526',
  
        indexName: 'evmosdocs',
  
        contextualSearch: true,
        searchParameters: {},
      },
    }),
};

module.exports = config;
