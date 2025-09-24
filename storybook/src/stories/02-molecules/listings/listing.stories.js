import twig from './listing.twig';
import {
  wysiwyg,
  video,
  accordion,
  tabs,
  testimonial,
  contact,
  card,
} from '../../global/placeholders/components.json';
import logos from '@molecules/cards/logo/logo-image.stories.js';
import logo_twig from '@molecules/cards/logo/logo-image.twig';

export default {
  title: 'Molecules/Listings',
};

const Template = (args) => twig(args);

export const Cards3Col = Template.bind({});
Cards3Col.args = {
  columns: 3,
  view_mode: 'card',
  cards: [
    { ...card },
    { ...card },
    { ...card },
  ],
};

export const Cards2Col = Template.bind({});
Cards2Col.args = {
  columns: 2,
  view_mode: 'card',
  cards: [
    { ...card },
    { ...card },
    { ...card },
  ],
};

export const HorizontalCards = Template.bind({});
HorizontalCards.args = {
  columns: 1,
  view_mode: 'stacked',
  cards: [
    { ...card },
    { ...card },
    { ...card },
  ],
};

export const Logos = Template.bind({});
Logos.args = {
  columns: 3,
  cards: [
    logo_twig({ logo: logos.logos[0] }),
    logo_twig({ logo: logos.logos[1] }),
    logo_twig({ logo: logos.logos[2] }),
    logo_twig({ logo: logos.logos[3] }),
  ],
};
