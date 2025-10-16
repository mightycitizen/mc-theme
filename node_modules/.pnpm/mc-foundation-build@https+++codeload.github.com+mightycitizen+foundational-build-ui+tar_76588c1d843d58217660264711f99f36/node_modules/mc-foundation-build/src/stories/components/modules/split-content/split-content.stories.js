import twig from './split-content.twig';
import { wysiwyg } from '../../../global/placeholders/components.json';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Demos/Components/Modules/Split Content',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {
  //   section_class: {
  //     control: {
  //       type: 'select',
  //       options: [
  //         '',
  //         'bg-solid-primary text-white',
  //         'bg-solid-secondary text-white',
  //         'bg-solid-tertiary text-white'
  //       ]
  //     }
  //   }
  // }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const defaultArgs = {
  links: [
    {
      text: "Link",
      url: "#"
    },
    {
      text: "Link",
      url: "#"
    },
    {
      text: "Link",
      url: "#"
    },
    {
      text: "Link",
      url: "#"
    },
    {
      text: "Link",
      url: "#"
    }
  ],
  intro_class: 'text-center',
  section_label: {
    icon: 'buildings',
    text: 'Example label goes here'
  },
  section_heading: '[h2, optional] Modular Component Intro, Label type',
  section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
  section_link: {
    url: '#',
    text: 'Optional Link'
  },
  column_left: wysiwyg
};
export const SplitContent = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
SplitContent.args = defaultArgs;
