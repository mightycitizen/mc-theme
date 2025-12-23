import twig from '@templates/page/page.twig';
import pageData from '@templates/page/page.stories.js';

import hero from '@organisms/hero/hero.twig';
import sidebar from '@organisms/sidebar/sidebar-news.twig';

import {
  wysiwyg,
} from '../../global/placeholders/components.json';

export default {
  title: 'Demos/Pages/News/News Detail',
};

const NewsFullTemplate = (args) => twig(args);

const sidebar_data = {
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
  publication: {
    text: 'Orange Cape Newsletter',
    url: 'Orange Cape Newsletter'
  },
  authors: [
    {
      thumbnail: {
        src: '/images/author-thumb.jpg',
        alt: 'author'
      },
      name: 'Authorname Lastname',
      url: '#',
      org_name: 'Organization name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros... '
    },
    {
      thumbnail: {
        src: '/images/author-thumb.jpg',
        alt: 'author'
      },
      name: 'Authorname Lastname',
      url: '#',
      org_name: 'Organization name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros... '
    }
  ],
  media_name: 'Firstname Lastname',
  media_email: 'email@mightyu.edu',
  media_phone: '512-555-1234'
};

const newsDetailArgs = {
  ...pageData,
  hero_section: hero({
    breadcrumbs: pageData.breadcrumbs,
    hero_inline: true,
    heading: 'Title of News Article',
    type: 'news',
    eyebrow: 'NEWS',
    summary: 'Summary of article goes here',
    below_hero: 'Rendered image goes here',
    byline: {
      authors: [
        'Firstname Lastname',
      ],
      publish_date: 'MM DD, YYYY',
    },
    links_bar_menu: null,
  }),
  content: wysiwyg,
  sidebar: sidebar( sidebar_data ),
};

export const NewsFull = NewsFullTemplate.bind({});
NewsFull.args = newsDetailArgs;

// Add more demo stories (e.g., events-full.twig) below as needed.