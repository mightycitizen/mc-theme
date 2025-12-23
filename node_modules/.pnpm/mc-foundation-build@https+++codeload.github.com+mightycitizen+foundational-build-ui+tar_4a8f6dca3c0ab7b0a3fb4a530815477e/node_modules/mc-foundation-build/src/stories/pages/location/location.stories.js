import twig from './location.twig';
import { placeholder, sizes } from '../../global/placeholders/images.json';
import {
  pagination,
  breadcrumbs,
  wysiwyg,
  card,
  accordion
} from '../../global/placeholders/components.json';
import { menu, social, logo, address, utility_menu, cta_menu, header_dropdown, menu_column, anchor_nav, local_nav, links_bar_menu, footer_links, site_name } from '../../global/placeholders/global.json';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/Location'
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const defaultArgs = {
  breadcrumbs,
  logo,
  menu,
  utility_menu,
  links_bar_menu,
  anchor_nav,
  local_nav,
  cta_menu,
  header_dropdown,
  social,
  address,
  footer_links,
  site_name,
  menu_column,
  wysiwyg,
  page_type: 'Location',
  page_title: 'Location name',
  page_subheading: 'Subtitle: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros.',
  below_hero: {
    page_image: {
      src: '/images/news-detail-featured.jpg',
      alt: 'group of students'
    }
  },
  page_sidebar: {
    location_type: 'Academic Building',
    parent_location: 'Address line 1 goes here</br>Address line 2 goes here',
    directions_url: {
      text: 'Get Directions',
      url: '#',
    },
    addresses: [
      {
        address: 'Address line 1 goes here',
      },
      {
        address: 'Address line 2 goes here',
      },
      {
        address: 'Address line 3 goes here',
      }
    ],
    location_hours: [
      {
        location_hour: 'Hours line 1 lorem ipsum'
      },
      {
        location_hour: 'Hours line 1 lorem ipsum'
      },
      {
        location_hour: 'Hours line 1 lorem ipsum'
      }
    ],
    departments: [
      {
        text: 'Undergraduate Admissions',
        url: '#'
      },
      {
        text: 'Financial Aid Office',
        url: '#'
      },
      {
        text: 'Student Affairs Office',
        url: '#'
      }
    ],
    more_info: {
      text: 'More Information',
      url: '#',
    }
  },
  modules: [
    {
      module_type: 'short-list-horizontal',
      section_heading: 'Related Events',
      section_link: {
        url: '#',
        text: 'Optional Link'
      },
      divider: true,
      cards: [
        {
          no_outline: true,
          var: 'short',
          image: {
            src: 'https://placehold.co/120x120',
            alt: 'Alt Text'
          },
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          summary: null,
          date: 'Saturday, 10.6.2024 | 6pm CT',
          address: 'Address Goes Here, Austin, Texas, USA'
        },
        {
          no_outline: true,
          var: 'short',
          image: {
            src: 'https://placehold.co/120x120',
            alt: 'Alt Text'
          },
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          summary: null,
          date: 'Saturday, 10.6.2024 | 6pm CT',
          address: 'Address Goes Here, Austin, Texas, USA'
        },
        {
          no_outline: true,
          var: 'short',
          image: {
            src: 'https://placehold.co/120x120',
            alt: 'Alt Text'
          },
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          summary: null,
          date: 'Saturday, 10.6.2024 | 6pm CT',
          address: 'Address Goes Here, Austin, Texas, USA'
        }
      ]
    }
  ],
  narrow_modules: [
    {
      module_type: 'wysiwyg',
      wysiwyg: '<h2>WYSIWYG Event content - h2 Heading - Lorem ipsum dolor sit amet</h2><h3>h3 Heading - Lorem ipsum dolor sit amet</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit amet blandit. Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius.</p><h4>h4 Heading - Lorem ipsum dolor sit amet</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit amet blandit. Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius.</p><p><a class="read-more" href="#">Link Text</a></p><p><a class="button" href="#">Button</a></p><p><a class="button secondary" href="#">Button</a></p>'
    },
    {
      module_type: 'accordion',
      exclude_container: true,
      section_id: 'section-2',
      ...accordion
    }
  ],
  sidebar_modules: [
    {
      module_type: 'card',
      ...card
    }
  ],

};

const parameters = {
  layout: 'fullscreen'
};

const Default = Template.bind({});
Default.args = defaultArgs;
Default.parameters = parameters;

export { Default};
