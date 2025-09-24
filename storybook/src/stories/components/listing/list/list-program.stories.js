import twig from './list-program.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export

export default {
  title: 'Audit/Components/Listing/Program List',
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

const list = [...Array(5)].map((_, i) => ({
  heading: 'Biology (BS / BA)',
  url: '#',
  specializations: '<a href="#">MBA in Healthcare Administration</a></br><a href="#">MBA in Data Analytics</a></br><a href="#">MBA in Finance</a>',
  image: {
    src: 'https://placehold.co/400x360',
    alt: 'Image alt text'
  },
  type: "Bachelor's",
  campus: true,
  online: true
}));

const defaultArgs = {
  list
};
export const List = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
List.args = defaultArgs;
