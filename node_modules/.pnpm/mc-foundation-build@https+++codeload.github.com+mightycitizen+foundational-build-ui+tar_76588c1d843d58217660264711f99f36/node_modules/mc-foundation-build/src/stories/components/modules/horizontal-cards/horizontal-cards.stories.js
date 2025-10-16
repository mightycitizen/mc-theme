import twig from './horizontal-cards.twig';
import { card } from '../../../global/placeholders/components.json';
import { sizes } from '../../../global/placeholders/images.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Demos/Components/Modules/Cards/Horizontal Card'
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {

  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  return twig(args);
};

const defaultArgs = {
  section_heading: 'Optional heading',
  section_description: 'Optional description',
  cards: [card, card, card],
  image: null
};
const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

const Image = Template.bind({});
const imageDimensions = sizes.landscapeCroppedMedium;
Image.args = {
  ...defaultArgs,
  image: {
    src: `https://placehold.co/${imageDimensions.width}x${imageDimensions.height}`,
    alt: 'Alt Text'
  }
};

const ImageFlush = Template.bind({});
ImageFlush.args = {
  ...Image.args,
  image_position: 'flush'
};

const News = Template.bind({});
News.args = {
  ...defaultArgs,
  image_position: 'flush',
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
  publish_date: 'PUBLISH DATE HERE',
  heading: {
    text: '[h3] Heading example lorem ipsum',
    url: '#',
    level: 3
  },
  link: null
};

const Events = Template.bind({});
Events.args = {
  ...defaultArgs,
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
  publish_date: 'PUBLISH DATE HERE',
  heading: {
    text: '[h3] Heading example lorem ipsum',
    url: '#',
    level: 3
  },
  link: null,
  date: 'Saturday, 10.6.2024 | 6pm CT',
  address: 'Address Goes Here, Austin, Texas, USA',
  categories: [
    {
      text: 'Category goes here',
      url: '#'
    },
    {
      text: 'Category goes here',
      url: '#'
    }
  ]
};

export { Default, Image, ImageFlush, News, Events };
