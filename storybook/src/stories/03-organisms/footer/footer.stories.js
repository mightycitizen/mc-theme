import twig from './footer.twig';
import {
  social,
  footer_links,
  logo,
  address,
  menu_column,
  site_name
} from '../../global/placeholders/global.json';

const menu = [
  {
    "text": "Optional Label",
    "url": "",
    "children": [
      {
        "text": "Item 1",
        "url": "#"
      },
      {
        "text": "Item 2",
        "url": "#"
      },
      {
        "text": "Item 3",
        "url": "#"
      },
      {
        "text": "Item 4",
        "url": "#"
      },
    ],
  },
  {
    "text": "Optional Label",
    "url": "",
    "children": [
      {
        "text": "Item 1",
        "url": "#"
      },
      {
        "text": "Item 2",
        "url": "#"
      },
      {
        "text": "Item 3",
        "url": "#"
      },
      {
        "text": "Item 4",
        "url": "#"
      },
    ],
  },
  {
    "text": "Optional Label",
    "url": "",
    "children": [
      {
        "text": "Item 1",
        "url": "#"
      },
      {
        "text": "Item 2",
        "url": "#"
      },
      {
        "text": "Item 3",
        "url": "#"
      },
      {
        "text": "Item 4",
        "url": "#"
      },
    ],
  },
];

const ctas = [
  {
    "text": "Primary CTA",
    "url": "#",
    'modifier': 'button primary',
  },
  {
    "text": "Secondary CTA",
    "url": "#",
    'modifier': 'button secondary',
  }
];

const contact = [
  {
    "type": "phone",
    "icon": "icon-phone-call",
    "label": "Phone",
    "text": "123-456-7890",
    "url": "tel:1234567890"
  },
  {
    "type": "address",
    "icon": "icon-map-pin-line",
    "label": "Get Directions",
    "text": "123 Main St, City, State 12345",
    "url": "https://www.google.com/maps/place/123+Main+St,+City,+State+12345"
  },
  {
    "type": "email",
    "icon": "icon-at",
    "label": "Email",
    "text": "info@mightyuniversity.edu",
    "url": "mailto:info@mightyuniversity.edu"
  },
];

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

export const Footer = Template.bind({});
Footer.args = {
  menu,
  social,
  ctas,
  contact,
  footer_links,
  logo,
  address,
  menu_column,
  site_name
};

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Footer',
  Template,
  Footer,
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
