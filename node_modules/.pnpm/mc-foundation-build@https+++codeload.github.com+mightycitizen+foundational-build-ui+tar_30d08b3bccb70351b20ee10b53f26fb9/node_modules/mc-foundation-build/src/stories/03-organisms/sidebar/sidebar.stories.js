import twig from './sidebar.twig';
import './sidebar.css';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Sidebar',
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args

const introConfig = {
  section_heading: 'Heading',
  section_description: 'Description',
  section_button: {
    url: '#',
    text: 'Button'
  },
};

const defaultArgs = {
  share_top: true,
  share_bottom: false,
  primary_sections: [
    {
      title: 'Section 1',
      content: 'Content for section 1'
    },
    {
      title: 'Section 2',
      content: 'Content for section 2'
    }
  ],
  secondary_sections: [
    {
      title: 'Section 1',
      content: 'Content for section 1'
    },
    {
      title: 'Section 2',
      content: 'Content for section 2'
    }
  ],
};

Default.args = defaultArgs;

export { Default };
