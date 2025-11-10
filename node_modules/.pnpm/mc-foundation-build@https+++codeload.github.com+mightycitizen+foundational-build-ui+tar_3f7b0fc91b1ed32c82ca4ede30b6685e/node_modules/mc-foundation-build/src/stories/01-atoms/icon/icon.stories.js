import twig from './icon.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Icon'
  // argTypes: {
  //   class: {
  //     control: {
  //       type: 'text'
  //     }
  //   },
  //   text: {
  //     control: {
  //       type: 'text'
  //     }
  //   },

  // }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const defaultArgs = {
  icon: {
    name: 'ph ph-[building]',

  }
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

export const Background = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Background.args = Object.assign(
  { ...defaultArgs },
  {
    icon: {
      name: 'ph ph-[building]',
      background: 'primary-500',
    },
  }
);
