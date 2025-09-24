import twig from './glance-list.twig';
// import { wysiwyg } from '../../../global/placeholders/components.json';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Demos/Components/Modules/Glance List',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {}
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
  // section_heading: 'Heading',
  // section_description: 'Description',
  section_class: 'bg-primary-800 text-white',
  heading: 'Program at a Glance',
  items: [
    {
      label: 'College/School',
      content: '<a href="#">College of Arts & Sciences, College of Business</a>'
    },
    {
      label: 'Program Type',
      content: "Undergraduate - Bachelor's"
    },
    {
      label: 'Credential',
      content: "Bachelor of Science (BS) or Bachelor of Arts (BA)"
    },
    {
      label: 'Formats',
      content: "Online, Campus, *format caveat goes here if applied"
    },
    {
      label: 'Campus / Location',
      content: "Campus value goes here"
    },
    {
      label: 'Accelerated',
      content: "Yes"
    },
    {
      label: 'Specializations',
      content: '<a href="#">Specialization name</a>, <a href="#">Specialization name</a>,<br/><a href="#">Specialization name</a>, <a href="#">Specialization name</a>'
    },
    {
      label: 'Est. time to completion',
      content: "4 semesters"
    },
    {
      label: 'Next start date',
      content: "Date goes here"
    },
    {
      label: 'Application Deadline',
      content: "Deadline goes here"
    },
    {
      label: 'Cost per credit',
      content: "$120"
    },
    {
      label: 'Total Credits',
      content: "24"
    },
    {
      label: 'Estimated total cost',
      content: "$2880"
    },
  ]
};
export const Glancelist = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Glancelist.args = defaultArgs;
