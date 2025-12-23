import twig from './alerts-list.twig';
import { alert_teaser } from '../../../global/placeholders/components.json';
import { sizes } from '../../../global/placeholders/images.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Demos/Components/Modules/Alerts/Alerts List'
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {

  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  return twig(args);
};

const defaultArgs = {
  section_heading: 'Active Alerts & Notices',
  section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
  divider: true,
  alert_teasers: [alert_teaser, alert_teaser, alert_teaser],
  image: null
};
const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

export { Default };
