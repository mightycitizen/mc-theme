import twig from './split-content.twig';

export default {
  title: 'Molecules/Split Content',
};

const ColumnsTemplate = (args) => twig(args);

const defaultArgs = {
  col_1: 'Column 1',
  col_2: 'Column 2',
  col_1_modifiers: 'bg-neutrals-100 text-center',
  col_2_modifiers: 'bg-neutrals-100 text-center',
};

export const ColumnsNarrow = ColumnsTemplate.bind({});
ColumnsNarrow.args = {
  ...defaultArgs,
  columns: 'narrow',
}

export const ColumnsDefault = ColumnsTemplate.bind({});
ColumnsDefault.args = {
  ...defaultArgs,
  columns: 'default',
}

export const ColumnsWide = ColumnsTemplate.bind({});
ColumnsWide.args = {
  ...defaultArgs,
  columns: 'wide',
}

export const ColumnsHalf = ColumnsTemplate.bind({});
ColumnsHalf.args = {
  ...defaultArgs,
  columns: 'half',
}
