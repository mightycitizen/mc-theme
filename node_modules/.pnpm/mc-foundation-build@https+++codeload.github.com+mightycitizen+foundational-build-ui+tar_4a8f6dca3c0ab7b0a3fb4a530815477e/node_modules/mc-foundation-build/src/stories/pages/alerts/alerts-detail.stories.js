import twig from './alerts-detail.twig';
import { menu, social, logo, address, utility_menu, cta_menu, header_dropdown, menu_column, anchor_nav, local_nav, footer_links, site_name } from '../../global/placeholders/global.json';

import { placeholder, sizes } from '../../global/placeholders/images.json';

import {
  wysiwyg,
  pagination,
  breadcrumbs
} from '../../global/placeholders/components.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/Alerts/Alerts Detail'
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

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
  image_sizes: sizes,
  image_placeholder: placeholder,
  wysiwyg,
  pagination
};
const parameters = {
  layout: 'fullscreen'
};

const Default = Template.bind({});
Default.args = defaultArgs;
Default.parameters = parameters;

const FeaturedImage = Template.bind({});
FeaturedImage.args = {
  ...defaultArgs,
  featured_image: {
    src: 'https://placehold.co/430x230',
    alt: ''
  }
};
FeaturedImage.parameters = parameters;

export { Default, FeaturedImage };
