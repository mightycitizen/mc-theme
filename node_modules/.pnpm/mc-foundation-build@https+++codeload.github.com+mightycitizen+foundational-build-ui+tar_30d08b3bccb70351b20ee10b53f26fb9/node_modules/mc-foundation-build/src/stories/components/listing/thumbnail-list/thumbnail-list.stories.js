import twig from './thumbnail-list.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export

export default {
  title: 'Audit/Components/Listing/Thumbnail List',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    // label: { control: 'text' },
    // onClick: { action: 'onClick' },
    // primary: { control: 'boolean' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
  }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const cards = [...Array(5)].map((_, i) => ({
  no_outline: true,
  heading: {
    text: 'Event Title',
    url: '#',
  },
  url: '#',
  summary: null,
  image: {
    src: 'https://placehold.co/120x120',
    alt: 'Image alt text'
  },
  label: 'Optional Label / TBD',
  categories: [
    {
      url: '#',
      title: 'Category'
    }
  ]
}));

const defaultArgs = {
  cards
};
export const ThumbnailList = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
ThumbnailList.args = defaultArgs;
