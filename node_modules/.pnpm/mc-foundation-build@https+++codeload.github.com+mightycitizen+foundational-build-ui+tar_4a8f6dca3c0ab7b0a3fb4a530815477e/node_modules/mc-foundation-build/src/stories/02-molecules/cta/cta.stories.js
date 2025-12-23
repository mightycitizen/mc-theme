import twig from './cta.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Molecules/CTA'
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

const defaultArgs = {
  section_label: {
    icon: {
      name: 'ph ph-[buildings]',
    },
    text: 'Example label goes here'
  },
  section_heading: '[h2] Call to Action Heading',
  section_description: '[200 char, text + links allowed] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros.',
  section_button: {
    text: 'Secondary Button',
    url: '#'
  },
  section_button_tertiary: {
    text: 'Tertiary Button',
    url: '#'
  },
  intro_class: 'default'
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

export const Image = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Image.args = Object.assign(
  { ...defaultArgs },
  {
    section_video: true,
    video_type: 'youtube',
    video_id: 'gJ6APKIjFQY',
    image: {
      src: 'https://placehold.co/430x230',
      alt: 'Alt Text'
    },
    section_disclaimer: 'Optional disclaimer text goes here lorem ipsum.'
  }
);

export const Centered = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Centered.args = Object.assign(
  { ...defaultArgs },
  {
    intro_class: 'text-center'
  }
);

export const BackgroundImage = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
BackgroundImage.args = Object.assign(
  { ...defaultArgs },
  {
    section_background: {
      src: 'https://placehold.co/1200x500',
      alt: 'Image'
    }
  }
);

export const BlockLinks = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
BlockLinks.args = Object.assign(
  { ...defaultArgs },
  {
    intro_class: 'text-center',
    section_label: null,
    section_button: null,
    section_button_tertiary: null,
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
  }
);


