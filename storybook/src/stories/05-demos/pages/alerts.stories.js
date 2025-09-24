import twig from '@templates/page/page.twig';
import pageData from '@templates/page/page.stories.js';

import hero from '@organisms/hero/hero.twig';

import module from '@organisms/module/module.twig';
import module_data from '@organisms/module/module.stories.js';

import {
  hero_secondary,
  wysiwyg,
} from '../../global/placeholders/components.json';

export default {
  title: 'Demos/Pages/Alerts',
  tags: ['!autodocs'],
};

// Listing Page
const AlertsListingTemplate = (args) => twig(args);
const alertsListingArgs = {
  ...pageData,
  end_to_end: true,
  hero_section: hero({
    ...hero_secondary,
    breadcrumbs: pageData.breadcrumbs,
    heading: "University Alerts",
    summary: "[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum. ",
    hero_button: {
      text: "Primary Button",
      url: "#"
    },
    readmore_link: {
      text: "Optional Link",
      url: "#"
    }
  }),
  content: [
    module(module_data.AlertsModule.args),
    module({
      ...module_data.InactiveAlertsModule.args,
      section_class: 'bg-neutrals-50'
    }),
  ].join(''),
};

export const AlertsListing = AlertsListingTemplate.bind({});
AlertsListing.args = alertsListingArgs;

// Detail Page
const AlertsDetailTemplate = (args) => twig(args);
const alertsDetailArgs = {
  ...pageData,
  end_to_end: true,
  hero_section: hero({
    breadcrumbs: pageData.breadcrumbs,
    content_type: 'alert',
    heading: 'Emergency Alert: Sharknado Warning! Seek shelter immediately.',
    alert_type: {
      type: 'emergency',
      label: 'Emergency Alert',
      icon: {
        name: 'icon-warning-fill',
      },
      icon_colors: 'bg-tertiary-100 text-tertiary-700'
    },
    badge: {
      icon: {
        name: 'icon-warning-fill',
      },
      style: 'warning',
      text: 'Status: Active'
    },
    last_updated: 'Tuesday, March 11, 5:07 PM CT',
    summary: '[Alert Message] Notice: Due to an unforeseen meteorological anomaly involving sharks and tornadoes, a temporary suspension of all outdoor activities is advised. Please consult your local shark-weather index for further instructions.'
  }),
  content:
    module({
      module_type: 'wysiwyg',
      wysiwyg: wysiwyg
    })
};

export const AlertsDetail = AlertsDetailTemplate.bind({});
AlertsDetail.args = alertsDetailArgs;
