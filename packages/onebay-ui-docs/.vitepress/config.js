const path = require('path');

module.exports = {
  lang: 'en-US',
  description: 'A mobile web UI library write by vue3',
  title: 'Onebay',
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/assets/images/favicon.ico' }],
  ],
  markdown: {
    anchor: { permalink: false },
  },
  themeConfig: {
    logo: '/assets/images/onebay.png',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/docs/action/action-sheet' },
      { text: 'Release Notes', link: 'https://github.com/onebay/onebay-ui/releases' },
      { text: 'Github', link: 'https://github.com/onebay/onebay-ui' }
    ],
    sidebar: [
      {
        text: 'Introduce',
        link: '/guide/'
      },
      {
        text: 'Getting started',
        link: '/guide/getting-started'
      },
      {
        text: 'action',
        children: [
          {
            text: 'action-sheet',
            link: '/docs/action/action-sheet'
          },
          {
            text: 'activity-indicator',
            link: '/docs/action/activity-indicator'
          },
          {
            text: 'message',
            link: '/docs/action/message'
          },
          {
            text: 'modal',
            link: '/docs/action/modal'
          },
          {
            text: 'progress',
            link: '/docs/action/progress'
          },
          {
            text: 'pull-to-refresh',
            link: '/docs/action/pull-to-refresh'
          }
        ]
      },
      {
        text: 'basic',
        children: [
          {
            text: 'button',
            link: '/docs/basic/button'
          },
          {
            text: 'icon',
            link: '/docs/basic/icon'
          }
        ]
      },
      {
        text: 'form',
        children: [
          {
            text: 'checkbox',
            link: '/docs/form/checkbox'
          },
          {
            text: 'image-picker',
            link: '/docs/form/image-picker'
          },
          {
            text: 'input',
            link: '/docs/form/input'
          },
          {
            text: 'input-number',
            link: '/docs/form/input-number'
          },
          {
            text: 'picker',
            link: '/docs/form/picker'
          },
          {
            text: 'radio',
            link: '/docs/form/radio'
          },
          {
            text: 'range',
            link: '/docs/form/range'
          },
          {
            text: 'rate',
            link: '/docs/form/rate'
          },
          {
            text: 'search-bar',
            link: '/docs/form/search-bar'
          },
          {
            text: 'slider',
            link: '/docs/form/slider'
          },
          {
            text: 'switch',
            link: '/docs/form/switch'
          },
          {
            text: 'textarea',
            link: '/docs/form/textarea'
          }
        ]
      },
      {
        text: 'layout',
        children: [
          {
            text: 'accordion',
            link: '/docs/layout/accordion'
          },
          {
            text: 'flex',
            link: '/docs/layout/flex'
          },
          {
            text: 'float-layout',
            link: '/docs/layout/float-layout'
          },
          {
            text: 'list',
            link: '/docs/layout/list'
          }
        ]
      },
      {
        text: 'navigation',
        children: [
          {
            text: 'back-top',
            link: '/docs/navigation/back-top'
          },
          {
            text: 'drawer',
            link: '/docs/navigation/drawer'
          },
          {
            text: 'navbar',
            link: '/docs/navigation/navbar'
          },
          {
            text: 'pagination',
            link: '/docs/navigation/pagination'
          },
          {
            text: 'segmented-control',
            link: '/docs/navigation/segmented-control'
          },
          {
            text: 'tabbar',
            link: '/docs/navigation/tabbar'
          }
        ]
      },
      {
        text: 'view',
        children: [
          {
            text: 'badge',
            link: '/docs/view/badge'
          },
          {
            text: 'divider',
            link: '/docs/view/divider'
          },
          {
            text: 'image-preview',
            link: '/docs/view/image-preview'
          },
          {
            text: 'noticebar',
            link: '/docs/view/noticebar'
          },
          {
            text: 'steps',
            link: '/docs/view/steps'
          },
          {
            text: 'swiper',
            link: '/docs/view/swiper'
          },
          {
            text: 'tag',
            link: '/docs/view/tag'
          },
          {
            text: 'timeline',
            link: '/docs/view/timeline'
          }
        ]
      }
    ]
  }
};