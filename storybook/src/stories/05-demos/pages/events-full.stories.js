import twig from '@templates/page/page.twig';
import pageData from '@templates/page/page.stories.js';

import hero from '@organisms/hero/hero.twig';

import sidebar from '@organisms/sidebar/sidebar-events.twig';
import sidebar_bottom from '@organisms/sidebar/sidebar-events-bottom.twig';

import {
  wysiwyg,
} from '../../global/placeholders/components.json';

export default {
  title: 'Demos/Pages/Events/Event Detail',
};

const EventsFullTemplate = (args) => twig(args);

const sidebar_data = {
  page_title: 'Title of Event',
  register_button: {
    text: 'Register now',
    url: '#'
  },
  event_website: {
    text: 'Event Website',
    url: '#'
  },
  event_date: 'March 4, 2025',
  event_time: '4:30am - 5:30pm CT',
  event_location: 'Address line 1 goes here</br>Address line 2 goes here</br>Address line 3 goes here',
  event_directions_url: {
    text: 'Get Directions',
    url: '#',
  },
  event_virtual_meeting_url: {
    text: 'Virtual Meeting Link',
    url: '#',
  },
  topics: [
    {
      text: 'Alumni',
      url: '#'
    },
    {
      text: 'Topic name here',
      url: '#'
    },
    {
      text: 'Topic name here',
      url: '#'
    },
    {
      text: 'Topic name here',
      url: '#'
    },
  ],
  who_its_for: [
    {
      text: 'Current Students',
      url: '#'
    },
    {
      text: 'Alumni',
      url: '#'
    }
  ],
  event_series: {
    text: 'Portuguese Literature Speaker Series',
    url: '#'
  },
  media_name: 'Firstname Lastname',
  media_email: 'email@mightyu.edu',
  media_phone: '512-555-1234',
}

const eventsDetailArgs = {
  ...pageData,
  hero_section: hero({
    breadcrumbs: pageData.breadcrumbs,
    hero_inline: true,
    heading: 'Title of Event',
    type: 'event',
    eyebrow: 'EVENT',
    summary: 'Summary of event goes here',
    below_hero: 'Rendered image goes here',
    links_bar_menu: null,
  }),
  content: wysiwyg,
  sidebar: sidebar( sidebar_data ),
  sidebar_bottom: sidebar_bottom( sidebar_data ),
};

export const EventsFull = EventsFullTemplate.bind({});
EventsFull.args = eventsDetailArgs;
