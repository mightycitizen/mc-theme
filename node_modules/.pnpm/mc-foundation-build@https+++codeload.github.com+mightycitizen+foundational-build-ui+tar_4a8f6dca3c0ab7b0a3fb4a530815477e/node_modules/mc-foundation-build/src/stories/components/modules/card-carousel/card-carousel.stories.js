import twig from './card-carousel.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Demos/Components/Modules/Cards/Card Carousel'
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

const cards = [...Array(5)].map((_, i) => ({
  badges: [
    {
      icon: 'icon-lightning-fill',
      text: 'Announcement'
    },
    {
      icon: 'icon-lightning-fill',
      text: 'Featured'
    }
  ],
  image: {
    src: 'https://placehold.co/430x230',
    alt: 'Alt Text'
  },
  type: 'Events',
  heading: {
    text: '[h3] Heading example lorem ipsum',
    url: '#',
    level: 3
  },
  summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
  date: 'Saturday, 10.6.2024 | 6pm CT',
  address: 'Address Goes Here, Austin, Texas, USA'
}));

const defaultArgs = {
  section_heading: 'Heading',
  section_description: 'Description',
  cards
};
export const CardCarousel = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
CardCarousel.args = defaultArgs;
