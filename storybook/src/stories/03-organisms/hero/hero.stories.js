import twig from './hero.twig';
import breadcrumbs_twig from '../../02-molecules/breadcrumbs/breadcrumbs.twig';
import {
  hero_primary,
  breadcrumbs as breadcrumb_data
} from '../../global/placeholders/components.json';

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

// More on args: https://storybook.js.org/docs/html/writing-stories/args
const defaultArgs = {
  ...hero_primary,
  breadcrumbs: breadcrumbs_twig({ breadcrumbs: breadcrumb_data }),
  eyebrow: 'Label Text',
};
export const Default = Template.bind({});
Default.args = defaultArgs;

export const Image = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Image.args = Object.assign(
  { ...defaultArgs },
  {
    image: {
      src: 'https://placehold.co/1600x900',
      alt: 'Placeholder Image'
    }
  }
);


//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Hero',
  Template,
  Default,
  breadcrumbs: breadcrumbs_twig({ breadcrumbs: breadcrumb_data }),
  ...hero_primary,
};
