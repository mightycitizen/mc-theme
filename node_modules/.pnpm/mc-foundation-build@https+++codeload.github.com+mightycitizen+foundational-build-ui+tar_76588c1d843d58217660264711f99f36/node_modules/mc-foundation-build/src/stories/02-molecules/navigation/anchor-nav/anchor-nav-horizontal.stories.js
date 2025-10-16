import twig from './anchor-nav.twig';
import { anchor_nav } from '../../../global/placeholders/global.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Navigation/Anchor Nav horizontal',
  argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

export const AnchorNavHorizontal = Template.bind({});
AnchorNavHorizontal.args = {
  anchor_nav,
  "horizontal_nav": true
};
