import twig from './statistics.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Demos/Components/Modules/Statistics',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    section_style: {
      control: {
        type: 'select',
        options: ['default', 'side']
      }
    }
  }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

// const cards = [...Array(5)].map((_, i) => ( {
//   heading: {
//     text: 'Heading',
//     url: '#',
//     level: 3
//   },
//   image: {
//     src: 'https://placehold.co/430x230',
//     alt: 'Alt Text'
//   },
//   link: {
//     text: 'Link',
//     url: '#'
//   },
// }));

const defaultArgs = {
  intro_class: 'text-left',
  section_label: {
    icon: 'home',
    text: 'Example label goes here'
  },
  section_heading: '[h2, optional] Modular Component Intro, Label type',
  section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
  section_link: {
    url: '#',
    text: 'Optional Link'
  },
  divider: true,
  statistics: [
    {
      stat_bg: 'primary-50',
      icon: {
        name: 'moon',
        background: 'primary'
      },
      value: '#1 Best Value',
      caption: 'of private universities in Kansas',
      description: 'Accordion to <a href="https://google.com"> US News & World Report, Best Colleges of 2025. Accordion to <a href="https://google.com"> US News & World Report, Best Colleges of 2025</a>'
    },
    {
      stat_bg: 'primary-50',
      icon: {
        name: 'moon',
        background: 'primary'
      },
      value: '#1 Best Value',
      caption: 'of private universities in Kansas',
      description: 'Accordion to <a href="https://google.com"> US News & World Report, Best Colleges of 2025</a>'
    },
    {
      stat_bg: 'primary-50',
      icon: {
        name: 'moon',
        background: 'primary'
      },
      value: '#1 Best Value',
      caption: 'of private universities in Kansas',
      description: 'Accordion to <a href="https://google.com"> US News & World Report, Best Colleges of 2025</a>'
    },
    {
      stat_bg: 'primary-50',
      icon: {
        name: 'moon',
        background: 'primary'
      },
      value: '#1 Best Value',
      caption: 'of private universities in Kansas',
      description: 'Accordion to <a href="https://google.com"> US News & World Report, Best Colleges of 2025. Accordion to <a href="https://google.com"> US News & World Report, Best Colleges of 2025</a>'
    },
    {
      stat_bg: 'primary-50',
      icon: {
        name: 'moon',
        background: 'primary'
      },
      value: '#1 Best Value',
      caption: 'of private universities in Kansas',
      description: 'Accordion to <a href="https://google.com"> US News & World Report, Best Colleges of 2025</a>'
    },
    {
      stat_bg: 'primary-50',
      icon: {
        name: 'moon',
        background: 'primary'
      },
      value: '#1 Best Value',
      caption: 'of private universities in Kansas',
      description: 'Accordion to <a href="https://google.com"> US News & World Report, Best Colleges of 2025</a>'
    }
  ]
};
const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

const Sidebar = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Sidebar.args = {
  ...defaultArgs,
  section_style: 'side'
};

export { Default, Sidebar };
