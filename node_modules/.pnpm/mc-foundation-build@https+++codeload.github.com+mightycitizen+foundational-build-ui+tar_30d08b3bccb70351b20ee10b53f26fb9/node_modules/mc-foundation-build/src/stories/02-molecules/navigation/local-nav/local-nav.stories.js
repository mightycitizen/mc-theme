import twig from './local-nav.twig';
import { local_nav } from '../../../global/placeholders/global.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Navigation/Local Nav',
  argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

export const LocalNav = Template.bind({});
LocalNav.args = {
  local_nav
};
//
