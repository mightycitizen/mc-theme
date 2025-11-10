import twig from './intro.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Intro',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
  }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args

const defaultArgs = {
  intro_class: 'text-left',
  section_label: {
    icon: {
      name: 'ph ph-[buildings]',
    },
    text: 'Example label goes here'
  },
  section_heading: '[h2, optional] Modular Component Intro, Label type',
  section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
  section_link: {
    url: '#',
    text: 'Optional Link'
  }
};

const Button = Template.bind({});
Button.args = {
  ...defaultArgs,
  section_button: {
    url: '#',
    text: 'Secondary Button'
  },
  section_link: null
};

const CenterText = Template.bind({});
CenterText.args = {
  ...defaultArgs,
  intro_class: 'text-center',
};

const Divider = Template.bind({});
Divider.args = {
  ...defaultArgs,
  divider: true
};

Default.args = defaultArgs;
export { Default, CenterText, Button, Divider};
