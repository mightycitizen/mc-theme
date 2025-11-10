import twig from './person-detail.twig';

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
  title: 'Pages/Person/Person Detail'
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
  subheading: 'Job title lorem ipsum',
  inline_links: [
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
  hero: hero_secondary,
  modules: [
    {
      module_type: 'contact-block',
      contact_email: 'example@mightyu.edu',
      contact_phone: '123-456-7890',
      contact_fax: '123-456-7890',
      contact_locations: [
        {
          text: 'Location: North Campus',
          url: '#',
          address: '1234 Mighty Building</br>Austin, TX 78745'
        },
        {
          text: 'Location: South Campus',
          url: '#',
          address: '1234 Mighty Building</br>Austin, TX 78745'
        }
      ],
      contact_information: [
        {
          icon: 'link--fill',
          text: 'Faculty Website',
          url: '#'
        },
        {
          icon: 'file-doc--fill',
          text: 'Curriculum Vitae',
          url: '#'
        }
      ],
    },
    {
      module_type: 'wysiwyg',
      section_id: 'section-1',
      wysiwyg
    }
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
  heading: "Hero title goes here",
  summary: "[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum. ",
  hero_button: {
    text: "Primary Button",
    url: "#"
  },
  readmore_link: {
    text: "Optional Link",
    url: "#"
  }
};

// console.log(defaultArgs);
Default.args = defaultArgs;
Default.parameters = parameters;

export { Default };


