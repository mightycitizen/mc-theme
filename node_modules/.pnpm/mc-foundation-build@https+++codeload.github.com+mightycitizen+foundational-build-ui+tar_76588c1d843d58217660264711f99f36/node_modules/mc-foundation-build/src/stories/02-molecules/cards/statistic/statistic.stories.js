import twig from './statistic.twig';
import { statistic } from '../../../global/placeholders/components.json';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Cards/Statistic',
  ...statistic,
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    value: {
      control: 'text'
    },
    link: {
      url: {
        control: 'text'
      },
      target: {
        control: 'text'
      }
    },
    text: {
      control: 'text'
    }
  }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const defaultArgs = {
  ...statistic
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

export const List = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
List.args = Object.assign(
  { ...defaultArgs },
  {
    style: "list"
  }
);

export const Background = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Background.args = Object.assign(
  { ...defaultArgs },
  {
    stat_bg: "primary-50"
  }
);

export const ListBg = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
ListBg.args = Object.assign(
  { ...defaultArgs },
  {
    style: "list",
    stat_bg: "primary-50"
  }
);

export const Inline = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Inline.args = Object.assign(
  { ...defaultArgs },
  {
    style: "inline",
    stat_bg: "primary-50"
  }
);
