import twig from './news-category.twig';

import { placeholder, sizes } from '../../global/placeholders/images.json';

import {
  accordion,
  tabs,
  breadcrumbs,
  hero_primary,
  card,
  contact,
  testimonial,
  wysiwyg,
  video,
  steps,
  statistic,
  links
} from '../../global/placeholders/components.json';

import { menu, social, logo, address, utility_menu, cta_menu, header_dropdown, menu_column, anchor_nav, local_nav, links_bar_menu, footer_links, site_name } from '../../global/placeholders/global.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/News/News Category'
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  return twig(args);
};

const hero_secondary = {
  image: {
    "src": "/images/hero-secondary.jpg",
    "alt": "University view"
  },
  heading: "Hon. prefix Firstname lastname hon. suffix",
  jobtitle: 'Job title lorem ipsum',
  organizations: [
    {
      text: 'Primary organization',
      url: '#'
    },
    {
      text: 'Secondary organization',
      url: '#'
    },
    {
      text: 'Secondary organization',
      url: '#'
    }
  ],
}

const Default = Template.bind({});
const defaultArgs = {
  breadcrumbs,
  menu,
  utility_menu,
  anchor_nav,
  local_nav,
  cta_menu,
  header_dropdown,
  logo,
  social,
  address,
  footer_links,
  site_name,
  menu_column,
  hero: {
    image: {
      src: "/images/hero-secondary.jpg",
      alt: "University view"
    },
    heading: "[Category - Research] News",
    summary: "[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum. ",
    hero_button: {
      text: "Primary Button",
      url: "#"
    },
    readmore_link: {
      text: "Optional Link",
      url: "#"
    }
  },
  modules: [
    {
      module_type: 'card-group',
      section_heading: 'Featured [Research] News',
      section_link: {
        text: 'Optional Link',
        url: '#'
      },
      cards: Array.from({ length: 9 }, (v, i) => {
        return {
          ...card,
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Report'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Featured'
            }
          ],
          heading: {
            text: "[h3] News article title, lorem ipsum dolor sit amet, full title lorem ipsum dolor sit amet",
            url: "#",
            level: 3
          },
          label: 'Label- publish date here',
          address: null,
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
          image: {
            src: "/images/card-img.jpg",
            alt: "Alt Text",
            alignment: 'right'
          },
        };
      })
    },
  ]
};

const parameters = {
  layout: 'fullscreen'
};

const hero_secondary_background = {
  background_color: true,
  image: {
    src: "/images/hero-secondary.jpg",
    alt: "University view"
  },
  heading: "[Category - Research] News",
  summary: "[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.",
  hero_button: {
    text: "Research at MightyU",
    url: "#"
  },
  readmore_link: {
    text: "Partner with us",
    url: "#"
  }
};

// console.log(defaultArgs);
Default.args = defaultArgs;
Default.parameters = parameters;

export { Default };


