import twig from './accordion.twig';
import { accordion, wysiwyg } from '../../global/placeholders/components.json';

export default {
  title: 'Molecules/Accordion'
};

const Template = (args) => {
  console.log(twig);
  return twig(args); // Pass the args as context to the template
};

const defaultArgs = {
  ...accordion,
  wysiwyg
};

const Default = Template.bind({});
Default.args = defaultArgs;

const Numbers = Template.bind({});
const numberArgs = {
  ...defaultArgs,
  accordion_id: 'accordion_numbers',
  modifier: 'steps'
};
Numbers.args = numberArgs;

const Icons = Template.bind({});
Icons.args = {
  ...defaultArgs,
  accordion_id: 'accordion_icons',
  items: [
    { heading: 'Heading', content: 'Content', icon: 'icon-moon' },
    { heading: 'Heading', content: 'Content', icon: 'icon-moon' }
  ]
};

export { Default, Icons, Numbers };
