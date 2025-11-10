import twig from './module.twig';
import {
  wysiwyg,
  video,
  accordion,
  tabs,
  testimonial,
  contact,
  card,
} from '../../global/placeholders/components.json';

import list_content from '@molecules/list-content/list-content.twig';
import list_content_data from '@molecules/list-content/list-content-examples.stories.js';

const Template = (args) => twig(args);

const section_intro = {
  intro_class: 'text-left',
  section_label: {
    icon: {
      name: 'ph ph-[buildings]',
    },
    text: 'Example label goes here'
  },
  section_heading: '[h2, optional] Modular Component Intro, Label type',
  section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
  section_link: {
    url: '#',
    text: 'Optional Link'
  },
  divider: true,
};

export const AccordionModule = Template.bind({});
AccordionModule.args = {
  ...section_intro,
  module_type: 'accordion',
  ...accordion
};

export const AlertsModule = Template.bind({});
AlertsModule.args = {
  ...section_intro,
  section_content: list_content(list_content_data.AlertsList.args),
};

export const InactiveAlertsModule = Template.bind({});
InactiveAlertsModule.args = {
  ...section_intro,
  section_content: list_content(list_content_data.InactiveAlertsList.args),
};

export const CardGridModule = Template.bind({});
CardGridModule.args = {
  ...section_intro,
  // module_type: 'card-group',
  section_content: list_content_data.Template(list_content_data.CardGrid.args),
};

export const TestimonialModule = Template.bind({});
TestimonialModule.args = {
  ...section_intro,
  module_type: 'testimonial',
  ...testimonial
};

export const VideoModule = Template.bind({});
VideoModule.args = {
  ...section_intro,
  module_type: 'video',
  ...video,
  caption: 'Sample Video'
};

export const WysiwygModule = Template.bind({});
WysiwygModule.args = {
  ...section_intro,
  module_type: 'wysiwyg',
  wysiwyg
};

export default {
  title: 'Organisms/Modules',
  Template,
  AlertsModule,
  InactiveAlertsModule,
  CardGridModule,
};
