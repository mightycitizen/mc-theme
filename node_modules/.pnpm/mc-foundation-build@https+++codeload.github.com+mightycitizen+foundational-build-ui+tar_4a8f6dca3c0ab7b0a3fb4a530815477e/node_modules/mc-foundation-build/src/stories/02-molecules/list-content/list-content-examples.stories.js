import twig from './list-content.twig';

import alert_active from '@molecules/cards/alert/alert-teaser.twig';
import alert_inactive from '@molecules/cards/alert/alert-content.twig';
import alert_data from '@molecules/cards/alert/alert-content.stories.js';

import statistic from '@molecules/cards/statistic/statistic.twig';
import statistic_data from '@molecules/cards/statistic/statistic.stories.js';

import card from '@molecules/cards/card/card.stories.js';


const Template = (args) => twig(args);

const defaultArgs = {
  items: [
    '<div class="bg-neutrals-100 text-center">Item</div>',
    '<div class="bg-neutrals-100 text-center">Item</div>',
    '<div class="bg-neutrals-100 text-center">Item</div>',
    '<div class="bg-neutrals-100 text-center">Item</div>',
  ],
};

export const AlertsList = Template.bind({});
AlertsList.args = {
  columns: 1,
  items: [
    alert_active(alert_data),
    alert_active(alert_data),
    alert_active(alert_data),
  ],
}

export const InactiveAlertsList = Template.bind({});
InactiveAlertsList.args = {
  columns: 1,
  items: [
    alert_inactive(alert_data),
    alert_inactive(alert_data),
    alert_inactive(alert_data),
  ],
}

export const StatisticsList = Template.bind({});
StatisticsList.args = {
  columns: 3,
  items: [
    statistic(statistic_data),
    statistic(statistic_data),
    statistic(statistic_data),
  ],
}

export const StatisticsStackedList = Template.bind({});
StatisticsStackedList.args = {
  columns: 1,
  items: [
    statistic({...statistic_data, style: 'list' }),
    statistic({...statistic_data, style: 'list' }),
    statistic({...statistic_data, style: 'list' }),
  ],
}

export const CardGrid = Template.bind({});
CardGrid.args = {
  columns: 3,
  items: [
    card.Template(card.Default.args),
    card.Template(card.Default.args),
    card.Template(card.Default.args),
  ],
}

export default {
  title: 'Molecules/List Content/Examples',
  Template,
  AlertsList,
  InactiveAlertsList,
  StatisticsList,
  StatisticsStackedList,
  CardGrid,
};
