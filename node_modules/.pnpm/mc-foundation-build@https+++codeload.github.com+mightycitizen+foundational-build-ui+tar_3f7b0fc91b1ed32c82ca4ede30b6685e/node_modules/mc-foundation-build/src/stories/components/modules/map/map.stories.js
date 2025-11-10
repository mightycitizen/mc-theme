import twig from './map.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Demos/Components/Modules/Map',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

  }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const defaultArgs = {
  section_heading: 'Map & Directions',
  map_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4075.9541835274713!2d-122.3492774!3d47.6205063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490151f4ed5b7f9%3A0xdb2ba8689ed0920d!2sSpace%20Needle!5e1!3m2!1sen!2sus!4v1756491599942!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  map_directions: 'https://maps.google.com/maps/dir//Space+Needle+400+Broad+St+Seattle,+WA+98109/@47.6205063,-122.3492774,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x5490151f4ed5b7f9:0xdb2ba8689ed0920d'
};
export const Map = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Map.args = defaultArgs;
