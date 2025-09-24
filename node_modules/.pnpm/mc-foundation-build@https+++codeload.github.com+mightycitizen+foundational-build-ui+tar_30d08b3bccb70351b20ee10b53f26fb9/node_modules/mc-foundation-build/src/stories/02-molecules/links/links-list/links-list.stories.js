import twig from './links-list.twig';
import { links } from '../../../global/placeholders/components.json';

export default {
  title: 'Molecules/Links/Links List'
};

const Template = (args) => {
  return twig(args);
};

const defaultArgs = {
  links,
};

const Default = Template.bind({});
Default.args = defaultArgs;

export { Default };
