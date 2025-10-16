import twig from './events-listing.twig';
import { menu, social, logo, address, utility_menu, cta_menu, header_dropdown, menu_column, anchor_nav, local_nav, footer_links, site_name } from '../../global/placeholders/global.json';

import { placeholder, sizes } from '../../global/placeholders/images.json';
import {
  pagination,
  breadcrumbs
} from '../../global/placeholders/components.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/Events/Events Listing'
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
export const EventsListing = Template.bind({});
EventsListing.args = {
  menu,
  logo,
  breadcrumbs,
  social,
  address,
  utility_menu,
  cta_menu,
  header_dropdown,
  menu_column,
  anchor_nav,
  local_nav,
  footer_links,
  site_name,
  image_sizes: sizes,
  image_placeholder: placeholder,
  pagination,
  cards: [
    {
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
        text: "[h3] Mighty Citizen Annual Prom & Talent Show",
        url: "#",
        level: 3
      },
      address: null,
      summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
      date: 'Saturday, 10.6.2024 | 6pm CT',
      address: 'Address Goes Here, Austin, Texas, USA',
      image: {
        src: "/images/news-listing.jpg",
        alt: "Alt Text",
        alignment: 'right'
      },
      categories: [
        {
          text: 'Category goes here',
          url: '#'
        },
        {
          text: 'Category goes here',
          url: '#'
        }
      ]
    }
  ]
};
EventsListing.parameters = {
  layout: 'fullscreen'
};
