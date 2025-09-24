import twig from './home.twig';

import { menu, social, logo, address, utility_menu, cta_menu, header_dropdown, menu_column, anchor_nav, local_nav, footer_links, site_name } from '../../global/placeholders/global.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export

// import {
//   hero_primary,
// } from '../../global/placeholders/components.json';

export default {
  title: 'Pages/Home'
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const Home = Template.bind({});

const defaultArgs = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  label: 'Alert',
  hero: {
    background_image: {
      src: "/images/hero-primary.jpg",
      alt: "University view"
    },
    heading: "Unleash Your Mighty Potential. Your Future Starts Here.",
    summary: "Discover a vibrant community, groundbreaking research, and unmatched opportunities designed to empower your journey and elevate your impact.",
    hero_button: {
      text: "Primary Button",
      url: "#"
    },
    readmore_link: {
      text: "Optional Link",
      url: "#"
    }
  },
  menu,
  social,
  logo,
  address,
  utility_menu,
  cta_menu,
  header_dropdown,
  menu_column,
  anchor_nav,
  local_nav,
  footer_links,
  site_name,
  modules: [
    {
      module_type: 'cta',
      section_heading: 'Explore degrees & programs',
      section_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit amet blandit. Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius.',
      section_button: {
        url: '#',
        text: 'Button'
      },
      section_link: {
        url: '#',
        text: 'Link text'
      },
      section_image: {
        src: "/images/hero-secondary.jpg",
        alt: 'Alt Text',
        alignment: 'right'
      }
    },
    {
      module_type: 'card-group',
      intro_class: 'text-left',
      section_heading: 'News from Mighty University',
      section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
      section_link: {
        url: '#',
        text: 'Optional Link'
      },
      divider: true,
      cards: [
        {
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Announcement'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Featured'
            }
          ],
          image: {
            src: 'https://placehold.co/430x230',
            alt: 'Alt Text'
          },
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          publish_date: 'PUBLISH DATE HERE',
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
        },
        {
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Announcement'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Featured'
            }
          ],
          image: {
            src: 'https://placehold.co/430x230',
            alt: 'Alt Text'
          },
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          publish_date: 'PUBLISH DATE HERE',
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
        },
        {
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Announcement'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Featured'
            }
          ],
          image: {
            src: 'https://placehold.co/430x230',
            alt: 'Alt Text'
          },
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          publish_date: 'PUBLISH DATE HERE',
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
        }
      ]
    },
    {
      module_type: 'card-group',
      intro_class: 'text-left',
      section_label: {
        icon: {
          name: 'ph ph-[buildings]',
        },
        text: 'Example label goes here'
      },
      section_heading: 'Upcoming Events',
      section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
      section_link: {
        url: '#',
        text: 'Optional Link'
      },
      divider: true,
      cards: [
        {
          no_outline: true,
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Home Game'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Tickets Available'
            }
          ],
          image: {
            src: 'https://placehold.co/430x230',
            alt: 'Alt Text'
          },
          type: 'Events',
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
          date: 'Saturday, 10.6.2024 | 6pm CT',
          address: 'Address Goes Here, Austin, Texas, USA'
        },
        {
          no_outline: true,
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Announcement'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Featured'
            }
          ],
          image: {
            src: 'https://placehold.co/430x230',
            alt: 'Alt Text'
          },
          type: 'Events',
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
          date: 'Saturday, 10.6.2024 | 6pm CT',
          address: 'Address Goes Here, Austin, Texas, USA'
        },
        {
          no_outline: true,
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Announcement'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Featured'
            }
          ],
          image: {
            src: 'https://placehold.co/430x230',
            alt: 'Alt Text'
          },
          type: 'Events',
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
          date: 'Saturday, 10.6.2024 | 6pm CT',
          address: 'Address Goes Here, Austin, Texas, USA'
        }
      ]
    },
    {
      module_type: 'cta',
      section_class: 'bg-neutrals-50',
      intro_class: 'text-center',
      section_label: {
        icon: {
          name: 'ph ph-[buildings]',
        },
        text: 'Example label goes here'
      },
      section_heading: 'Take Your first steps at MightyU.',
      section_description:
        '[200 char, text + links allowed] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros.',
      section_button: {
        url: '#',
        text: 'Apply Now'
      },
      section_button_tertiary: {
        url: '#',
        text: 'Visit'
      }
    },
  ]
};
// export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Home.args = defaultArgs;
Home.parameters = {
  layout: 'fullscreen'
};

export { Home };
