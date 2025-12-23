import twig from '@templates/page/page.twig';
import pageData from '@templates/page/page.stories.js';

import hero from '@organisms/hero/hero.twig';
import module from '@organisms/module/module.twig';

import {
  wysiwyg,
} from '../../global/placeholders/components.json';

export default {
  title: 'Demos/Pages/Directory/Person Detail',
};

const PersonFullTemplate = (args) => twig(args);

const personDetailArgs = {
  ...pageData,
  hero_section: hero({
    breadcrumbs: pageData.breadcrumbs,
    background_color: 'neutral',
    image: {
      "src": "/images/hero-secondary.jpg",
      "alt": "University view"
    },
    heading: "Hon. prefix Firstname lastname hon. suffix",
    subheading: 'Job title lorem ipsum',
    inline_links: [
      {
        text: 'Primary organization',
        url: '#'
      },
      {
        text: 'Secondary organization',
        url: '#'
      },
      {
        text: 'Secondary organization',
        url: '#'
      }
    ],
    info_panel: module({
      module_type: 'info-panel',
      panel_theme: 'light',
      label_display: 'inline',
      border: false,
      columns: [
        {
          heading: 'Contact',
          items: [
            { icon: { name: 'ph ph-[at]' }, label: 'Email', content: 'example@mightyu.edu' },
            { icon: { name: 'ph ph-[phone-call]' }, label: 'Phone', content: '123-456-7890' },
            { icon: { name: 'ph ph-[phone-call]' }, label: 'Fax', content: '123-456-7890' },
          ]
        },
        {
          heading: 'Location',
          items: [
            { icon: { name: 'ph ph-[map-pin-line]' }, label: '<a href="#">Address</a>', additional_info: '1234 Mighty Building<br>Austin, TX 78745' },
          ]
        },
        {
          heading: 'Information',
          items: [
            { icon: { name: 'ph ph-[link]' }, content: '<a href="#">Faculty Website</a>' },
            { icon: { name: 'ph ph-[link]' }, content: '<a href="#">Curriculum Vitae</a>' },
          ]
        }
      ]
    }),
  }),
  content: wysiwyg,
};

export const PersonFull = PersonFullTemplate.bind({});
PersonFull.args = personDetailArgs;
