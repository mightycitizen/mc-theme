import twig from './callout.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Callout',
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
  title: 'Callout title',
  text: 'Callout, 250 character max - Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
  link: {
    url: '#',
    target: 'new_tab',
    text: 'Alert title goes here lorem ipsum dolor sit amet.]'
  },
  icon: "book-bookmark"
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

export const Image = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Image.args = Object.assign(
  { ...defaultArgs },
  {
    icon: null,
    image: {
      src: "/images/callout.jpg",
      alt: "image alt",
    },
  }
);
