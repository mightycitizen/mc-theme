import twig from './alert.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Cards/Alert/Dismissible',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: {
      control: 'text'
    },
    link: {
      control: 'text'
    },
    closable: {
      control: 'boolean'
    }
  }
};

// Compile the template using Twig
// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;

  return twig(args);
};

const defaultArgs = {
  alert_type: {
    type: 'emergency',
    label: 'Emergency Alert',
    icon: { name: 'icon-lightning-fill' },
    icon_colors: 'bg-tertiary-100 text-tertiary-600',
  },
  title: 'Alert title',
  text: '[Text goes here]  Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
  link: {
    url: '#',
    target: 'new_tab',
    text: 'Alert title goes here lorem ipsum dolor sit amet.]'
  },
  closable: true
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

export const Link = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Link.args = Object.assign(
  { ...defaultArgs },
  {
    link: '#'
  }
);
