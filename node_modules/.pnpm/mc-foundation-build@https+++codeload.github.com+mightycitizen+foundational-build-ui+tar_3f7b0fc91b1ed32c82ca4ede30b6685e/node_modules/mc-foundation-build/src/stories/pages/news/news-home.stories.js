import twig from './news-home.twig';
import { menu, social, logo, address, utility_menu, cta_menu, header_dropdown, menu_column, anchor_nav, local_nav, footer_links, site_name } from '../../global/placeholders/global.json';

import { placeholder, sizes } from '../../global/placeholders/images.json';
import {
  pagination,
  breadcrumbs
} from '../../global/placeholders/components.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/News/News Home'
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {
  //   heading: {
  //     control: 'text'
  //   },
  //   subheading: {
  //     control: 'text'
  //   },
  //   description: {
  //     control: 'text'
  //   },
  //   intro_class: {
  //     control: 'text'
  //   },
  //   class: {
  //     control: 'text'
  //   },
  //   style: {
  //     control: {
  //       type: 'select',
  //     },
  //     options: [
  //       'side',
  //       ''
  //     ]
  //   },
  //   // backgroundColor: { control: 'color' },
  //   // label: { control: 'text' },
  //   // onClick: { action: 'onClick' },
  //   // primary: { control: 'boolean' },
  //   // size: {
  //   //   control: { type: 'select' },
  //   //   options: ['small', 'medium', 'large'],
  //   // },
  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const topic = {
  title: 'Category Name Goes Here'
};

const short_list_cards = [...Array(8)].map((_, i) => ({
  no_outline: true,
  var: 'short',
  image: {
    src: 'https://placehold.co/120x120',
    alt: 'Alt Text'
  },
  label: 'Optional Label / TBD',
  heading: {
    text: '[h3] Heading example lorem ipsum',
    url: '#',
    level: 3
  },
  summary: null
}));

export const NewsHome = Template.bind({});
NewsHome.args = {
  menu,
  logo,
  breadcrumbs,
  social,
  image_sizes: sizes,
  image_placeholder: placeholder,
  pagination,
  hierarchical_news: {
    section_heading: 'Featured News',
    featured_card: {
      horizontal: true,
      clickCard: true,
      featured: true,
      badges: [
        {
          icon: 'icon-lightning-fill',
          text: 'Badge 1'
        },
        {
          icon: 'icon-lightning-fill',
          text: 'Badge 2'
        }
      ],
      heading: {
        text: '[h3 or h2] Individual news card / featured - headline Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor. elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali.',
        url: '#',
        level: 3
      },
      summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
      image: {
        src: '/images/featured-hierarchical.jpg',
        alt: 'Alt Text'
      },
      date: 'Publish Date Here'
    },
    cards: [
      {
        no_outline: true,
        var: 'short',
        image: {
          src: 'https://placehold.co/120x120',
          alt: 'Alt Text'
        },
        heading: {
          text: '[h3] Heading example lorem ipsum',
          url: '#',
          level: 3
        },
        summary: null,
        label: '[LABEL - PUBLISH DATE]'
      },
      {
        no_outline: true,
        var: 'short',
        image: {
          src: 'https://placehold.co/120x120',
          alt: 'Alt Text'
        },
        heading: {
          text: '[h3] Heading example lorem ipsum',
          url: '#',
          level: 3
        },
        summary: null,
        label: '[LABEL - PUBLISH DATE]'
      },
      {
        no_outline: true,
        var: 'short',
        image: {
          src: 'https://placehold.co/120x120',
          alt: 'Alt Text'
        },
        heading: {
          text: '[h3] Heading example lorem ipsum',
          url: '#',
          level: 3
        },
        summary: null,
        label: '[LABEL - PUBLISH DATE]'
      }
    ]
  },
  topics: Array.from({ length: 9 }, (v, i) => topic),
  hierarchical_news_two: {
    intro_class: 'text-left',
    section_heading: '[h2, optional] Modular Component Intro, Label type',
    section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
    section_link: {
      url: '#',
      text: 'Optional Link'
    },
    cards: [
      {
        no_outline: true,
        var: 'short',
        image: {
          src: 'https://placehold.co/120x120',
          alt: 'Alt Text'
        },
        heading: {
          text: '[h3] Heading example lorem ipsum',
          url: '#',
          level: 3
        },
        summary: null,
        label: '[LABEL - PUBLISH DATE]'
      },
      {
        no_outline: true,
        var: 'short',
        image: {
          src: 'https://placehold.co/120x120',
          alt: 'Alt Text'
        },
        heading: {
          text: '[h3] Heading example lorem ipsum',
          url: '#',
          level: 3
        },
        summary: null,
        label: '[LABEL - PUBLISH DATE]'
      },
      {
        no_outline: true,
        var: 'short',
        image: {
          src: 'https://placehold.co/120x120',
          alt: 'Alt Text'
        },
        heading: {
          text: '[h3] Heading example lorem ipsum',
          url: '#',
          level: 3
        },
        summary: null,
        label: '[LABEL - PUBLISH DATE]'
      },
      {
        no_outline: true,
        var: 'short',
        image: {
          src: 'https://placehold.co/120x120',
          alt: 'Alt Text'
        },
        heading: {
          text: '[h3] Heading example lorem ipsum',
          url: '#',
          level: 3
        },
        summary: null,
        label: '[LABEL - PUBLISH DATE]'
      }
    ],
    featured_card: {
      clickCard: true,
      featured: true,
      heading: {
        text: '[h3] General content goes here - short name only, e.g. for categories',
        url: '#',
        level: 3
      },
      image: {
        src: '/images/featured-card.jpg',
        alt: 'Alt Text'
      },
    }
  },
  card_group: {
    intro_class: 'text-left',
    section_heading: 'Related Articles',
    section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
    section_link: {
      url: '#',
      text: 'Optional Link'
    },
    divider: true,
    cards: [
      {
        badges: [
          {
            icon: 'icon-lightning-fill',
            text: 'Announcement'
          },
          {
            icon: 'icon-lightning-fill',
            text: 'Featured'
          }
        ],
        image: {
          src: 'https://placehold.co/430x230',
          alt: 'Alt Text'
        },
        heading: {
          text: '[h3] Heading example lorem ipsum',
          url: '#',
          level: 3
        },
        summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
      },
      {
        badges: [
          {
            icon: 'icon-lightning-fill',
            text: 'Announcement'
          },
          {
            icon: 'icon-lightning-fill',
            text: 'Featured'
          }
        ],
        image: {
          src: 'https://placehold.co/430x230',
          alt: 'Alt Text'
        },
        heading: {
          text: '[h3] Heading example lorem ipsum',
          url: '#',
          level: 3
        },
        summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
      },
      {
        badges: [
          {
            icon: 'icon-lightning-fill',
            text: 'Announcement'
          },
          {
            icon: 'icon-lightning-fill',
            text: 'Featured'
          }
        ],
        image: {
          src: 'https://placehold.co/430x230',
          alt: 'Alt Text'
        },
        heading: {
          text: '[h3] Heading example lorem ipsum',
          url: '#',
          level: 3
        },
        summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
      }
    ]
  },
  short_list: {
    intro_class: 'text-left',
    section_heading: '[h2, optional] Modular Component Intro, Label type',
    section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
    section_link: {
      url: '#',
      text: 'Optional Link'
    },
    cards: short_list_cards
  }
};
NewsHome.parameters = {
  layout: 'fullscreen'
};
