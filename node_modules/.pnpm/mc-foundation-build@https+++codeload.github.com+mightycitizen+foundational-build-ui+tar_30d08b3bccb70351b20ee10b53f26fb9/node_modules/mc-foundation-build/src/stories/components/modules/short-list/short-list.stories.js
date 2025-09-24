import twig from './short-list.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Demos/Components/Modules/Content Group/Short List'
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {

  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const cards = [...Array(9)].map((_, i) => ({
  no_outline: true,
  var: 'short',
  image: {
    src: 'https://placehold.co/120x120',
    alt: 'Alt Text'
  },
  label: 'Optional Label / TBD',
  heading: {
    text: '[h3] Heading example lorem ipsum',
    url: '#',
    level: 3
  },
  summary: null
}));

const defaultArgs = {
  intro_class: 'text-left',
  section_heading: '[h2, optional] Modular Component Intro, Label type',
  section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
  section_link: {
    url: '#',
    text: 'Optional Link'
  },
  divider: true,
  cards: cards
};
export const ShortList = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
ShortList.args = defaultArgs;
