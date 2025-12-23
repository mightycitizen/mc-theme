import twig from './directory.twig';
import { menu, social, logo, links_bar_menu } from '../../global/placeholders/global.json';

import { placeholder, sizes } from '../../global/placeholders/images.json';
import {
  pagination,
  breadcrumbs
} from '../../global/placeholders/components.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/Directory'
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {
  //   heading: {
  //     control: 'text'
  //   },
  //   subheading: {
  //     control: 'text'
  //   },
  //   description: {
  //     control: 'text'
  //   },
  //   intro_class: {
  //     control: 'text'
  //   },
  //   class: {
  //     control: 'text'
  //   },
  //   style: {
  //     control: {
  //       type: 'select',
  //     },
  //     options: [
  //       'side',
  //       ''
  //     ]
  //   },
  //   // backgroundColor: { control: 'color' },
  //   // label: { control: 'text' },
  //   // onClick: { action: 'onClick' },
  //   // primary: { control: 'boolean' },
  //   // size: {
  //   //   control: { type: 'select' },
  //   //   options: ['small', 'medium', 'large'],
  //   // },
  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};
export const Directory = Template.bind({});
Directory.args = {
  menu,
  logo,
  breadcrumbs,
  social,
  links_bar_menu,
  image_sizes: sizes,
  image_placeholder: placeholder,
  pagination,
  cards: [
    {
      heading: {
        text: "[h3] Longfirstname Middlename-Longerlastname",
        url: "#",
        level: 3
      },
      jobtitle: 'Job title lorem ipsum',
      contact_email: 'example@mightyu.edu',
      contact_phone: '123-456-7890',
      image_position: 'flush',
      department: {
        text: 'Primary Organization/Department',
        url: '#'
      },
      image: {
        src: "/images/directory-horizontal-card.jpg",
        alt: "Alt Text",
        alignment: 'right'
      }
    },
    {
      heading: {
        text: "[h3] Longfirstname Middlename-Longerlastname",
        url: "#",
        level: 3
      },
      jobtitle: 'Job title lorem ipsum',
      contact_email: 'example@mightyu.edu',
      contact_phone: '123-456-7890',
      image_position: 'flush',
      department: {
        text: 'Primary Organization/Department',
        url: '#'
      },
      image: {
        src: "/images/directory-horizontal-card.jpg",
        alt: "Alt Text",
        alignment: 'right'
      }
    },
    {
      heading: {
        text: "[h3] Longfirstname Middlename-Longerlastname",
        url: "#",
        level: 3
      },
      jobtitle: 'Job title lorem ipsum',
      contact_email: 'example@mightyu.edu',
      contact_phone: '123-456-7890',
      image_position: 'flush',
      department: {
        text: 'Primary Organization/Department',
        url: '#'
      },
      image: {
        src: "/images/directory-horizontal-card.jpg",
        alt: "Alt Text",
        alignment: 'right'
      }
    },
    {
      heading: {
        text: "[h3] Longfirstname Middlename-Longerlastname",
        url: "#",
        level: 3
      },
      jobtitle: 'Job title lorem ipsum',
      contact_email: 'example@mightyu.edu',
      contact_phone: '123-456-7890',
      image_position: 'flush',
      department: {
        text: 'Primary Organization/Department',
        url: '#'
      },
      image: {
        src: "/images/directory-horizontal-card.jpg",
        alt: "Alt Text",
        alignment: 'right'
      }
    },
    {
      heading: {
        text: "[h3] Longfirstname Middlename-Longerlastname",
        url: "#",
        level: 3
      },
      jobtitle: 'Job title lorem ipsum',
      contact_email: 'example@mightyu.edu',
      contact_phone: '123-456-7890',
      image_position: 'flush',
      department: {
        text: 'Primary Organization/Department',
        url: '#'
      },
      image: {
        src: "/images/directory-horizontal-card.jpg",
        alt: "Alt Text",
        alignment: 'right'
      }
    }
  ]
};
Directory.parameters = {
  layout: 'fullscreen'
};
