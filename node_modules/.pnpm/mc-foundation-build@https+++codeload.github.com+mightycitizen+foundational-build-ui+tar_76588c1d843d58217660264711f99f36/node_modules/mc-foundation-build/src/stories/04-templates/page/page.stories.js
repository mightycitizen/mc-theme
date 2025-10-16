import twig from './page.twig';

import header from '@organisms/header/header.stories.js';
import footer from '@organisms/footer/footer.stories.js';
import hero from '@organisms/hero/hero.stories.js';
import breadcrumbs from '@molecules/breadcrumbs/breadcrumbs.stories.js';
import module from '@organisms/module/module.stories.js';

export default {
  title: 'Templates/Page',
  header: header.Template(header.Header.args),
  footer: footer.Template(footer.Footer.args),
  breadcrumbs: breadcrumbs.Template(breadcrumbs.Breadcrumbs.args),
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const Page = Template.bind({});

const defaultArgs = {
  end_to_end: true,
  header: header.Template(header.Header.args),
  footer: footer.Template(footer.Footer.args),
  hero_section: hero.Template(hero.Default.args),
  breadcrumbs: breadcrumbs.Template(breadcrumbs.Breadcrumbs.args),
  content: [
    module.Template(module.CardGridModule.args),
    module.Template(module.CardGridModule.args),
    module.Template(module.CardGridModule.args),
  ].join(''),
};
// export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Page.args = defaultArgs;

export { Page };
