import twig from './contact-block.twig';
import { contact } from '../../../global/placeholders/components.json';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Demos/Components/Modules/Contact Block'
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
  contact_email: 'example@mightyu.edu',
  contact_phone: '123-456-7890',
  contact_fax: '123-456-7890',
  contact_locations: [
    {
      address: '1234 Mighty Building</br>Austin, TX 78745'
    }
  ],
  contact_information: [
    {
      icon: 'link',
      text: 'Faculty Website',
      url: '#'
    },
    {
      icon: 'file-doc',
      text: 'Curriculum Vitae',
      url: '#'
    }
  ]
};
export const ContactBlock = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
ContactBlock.args = defaultArgs;
