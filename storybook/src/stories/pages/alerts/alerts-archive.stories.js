import twig from './alerts-archive.twig';

import { placeholder, sizes } from '../../global/placeholders/images.json';

import {
  accordion,
  tabs,
  breadcrumbs,
  hero_primary,
  hero_secondary,
  card,
  contact,
  testimonial,
  wysiwyg,
  video,
  steps,
  statistic,
  links
} from '../../global/placeholders/components.json';

import { menu, social, logo, address, utility_menu, cta_menu, header_dropdown, menu_column, anchor_nav, local_nav, links_bar_menu, footer_links, site_name } from '../../global/placeholders/global.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/Alerts/Alerts Archive'
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  return twig(args);
};

const Default = Template.bind({});
const defaultArgs = {
  breadcrumbs,
  menu,
  utility_menu,
  links_bar_menu,
  anchor_nav,
  local_nav,
  cta_menu,
  header_dropdown,
  logo,
  social,
  address,
  footer_links,
  site_name,
  menu_column,
  modules: [
    {
      module_type: 'wysiwyg',
      section_id: 'section-1',
      wysiwyg
    },
    {
      module_type: 'active_alerts',
      section_id: 'section-1',
      section_heading: 'Active Alerts & Notice',
      section_description:
        '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
      divider: true,
      alert_teasers: [
        {
          heading: {
            text: 'Alert title goes here lorem ipsum dolor site amet',
            url: '#'
          },
          alert_type: 'Emergency',
          last_updated: 'Tuesday, March 11, 5:07 PM CT',
          alert_message: '[Alert Message] Notice: Due to an unforeseen meteorological anomaly involving sharks and tornadoes, a temporary suspension of all outdoor activities is advised. Please consult your local shark-weather index for further instructions'
        },
        {
          heading: {
            text: 'Alert title goes here lorem ipsum dolor site amet',
            url: '#'
          },
          alert_type: 'Weather',
          last_updated: 'Tuesday, March 11, 5:07 PM CT',
          alert_message: '[Alert Message] Notice: Due to an unforeseen meteorological anomaly involving sharks and tornadoes, a temporary suspension of all outdoor activities is advised. Please consult your local shark-weather index for further instructions'
        },
        {
          heading: {
            text: 'Alert title goes here lorem ipsum dolor site amet',
            url: '#'
          },
          alert_type: 'Notice',
          last_updated: 'Tuesday, March 11, 5:07 PM CT',
          alert_message: '[Alert Message] Notice: Due to an unforeseen meteorological anomaly involving sharks and tornadoes, a temporary suspension of all outdoor activities is advised. Please consult your local shark-weather index for further instructions'
        }
      ]
    },
    {
      module_type: 'alerts_list',
      section_id: 'section-2',
      section_class: 'bg-neutrals-50',
      section_heading: 'Past Alerts (Inactive)',
      section_description:
        '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
      divider: true,
      alert_teasers: [
        {
          heading: {
            text: 'Alert title goes here lorem ipsum dolor site amet',
            url: '#'
          },
          alert_type: 'Emergency',
          last_updated: 'Tuesday, March 11, 5:07 PM CT',
          alert_message: '[Alert Message] Notice: Due to an unforeseen meteorological anomaly involving sharks and tornadoes, a temporary suspension of all outdoor activities is advised. Please consult your local shark-weather index for further instructions'
        },
        {
          heading: {
            text: 'Alert title goes here lorem ipsum dolor site amet',
            url: '#'
          },
          alert_type: 'Weather',
          last_updated: 'Tuesday, March 11, 5:07 PM CT',
          alert_message: '[Alert Message] Notice: Due to an unforeseen meteorological anomaly involving sharks and tornadoes, a temporary suspension of all outdoor activities is advised. Please consult your local shark-weather index for further instructions'
        },
        {
          heading: {
            text: 'Alert title goes here lorem ipsum dolor site amet',
            url: '#'
          },
          alert_type: 'Notice',
          last_updated: 'Tuesday, March 11, 5:07 PM CT',
          alert_message: '[Alert Message] Notice: Due to an unforeseen meteorological anomaly involving sharks and tornadoes, a temporary suspension of all outdoor activities is advised. Please consult your local shark-weather index for further instructions'
        },
        {
          heading: {
            text: 'Alert title goes here lorem ipsum dolor site amet',
            url: '#'
          },
          alert_type: 'Notice',
          last_updated: 'Tuesday, March 11, 5:07 PM CT',
          alert_message: '[Alert Message] Notice: Due to an unforeseen meteorological anomaly involving sharks and tornadoes, a temporary suspension of all outdoor activities is advised. Please consult your local shark-weather index for further instructions'
        },
        {
          heading: {
            text: 'Alert title goes here lorem ipsum dolor site amet',
            url: '#'
          },
          alert_type: 'Emergency',
          last_updated: 'Tuesday, March 11, 5:07 PM CT',
          alert_message: '[Alert Message] Notice: Due to an unforeseen meteorological anomaly involving sharks and tornadoes, a temporary suspension of all outdoor activities is advised. Please consult your local shark-weather index for further instructions'
        },
        {
          heading: {
            text: 'Alert title goes here lorem ipsum dolor site amet',
            url: '#'
          },
          alert_type: 'Weather',
          last_updated: 'Tuesday, March 11, 5:07 PM CT',
          alert_message: '[Alert Message] Notice: Due to an unforeseen meteorological anomaly involving sharks and tornadoes, a temporary suspension of all outdoor activities is advised. Please consult your local shark-weather index for further instructions'
        }
      ]
    }
  ]
};

const parameters = {
  layout: 'fullscreen'
};

// console.log(defaultArgs);
Default.args = defaultArgs;
Default.parameters = parameters;

const SecondaryHero = Template.bind({});
SecondaryHero.args = {
  ...defaultArgs,
  hero: hero_secondary
};
SecondaryHero.parameters = parameters;

export { Default, SecondaryHero };


