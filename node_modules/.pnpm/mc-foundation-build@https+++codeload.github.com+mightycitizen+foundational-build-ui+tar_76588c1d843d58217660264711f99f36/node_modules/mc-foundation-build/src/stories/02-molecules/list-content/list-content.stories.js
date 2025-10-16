import twig from './list-content.twig';

export default {
  title: 'Molecules/List Content',
};

const ListsTemplate = (args) => twig(args);

const defaultArgs = {
  items: [
    '<div class="bg-neutrals-100 text-center">Item</div>',
    '<div class="bg-neutrals-100 text-center">Item</div>',
    '<div class="bg-neutrals-100 text-center">Item</div>',
    '<div class="bg-neutrals-100 text-center">Item</div>',
  ],
};

export const ListVertical = ListsTemplate.bind({});
ListVertical.args = {
  ...defaultArgs,
  columns: 1
}

export const List2Col = ListsTemplate.bind({});
List2Col.args = {
  ...defaultArgs,
  columns: 2
}

export const List3Col = ListsTemplate.bind({});
List3Col.args = {
  ...defaultArgs,
  columns: 3
}
