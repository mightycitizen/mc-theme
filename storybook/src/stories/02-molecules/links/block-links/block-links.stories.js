import twig from './block-links.twig';
// import './read-more.css';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Links/Block Links',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    text: { control: 'text' },
    url: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['', 'lg']
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
  block_links: [
    {
      icon: 'buildings',
      text: 'Request Information',
      url: 'http://example.com'
    },
    {
      icon: 'map-pin-line',
      text: 'Visit Mighty Campus',
      url: 'http://example.com'
    },
    {
      icon: 'buildings',
      text: 'Find a major',
      url: 'http://example.com'
    }
  ]
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;
