import {create} from '@storybook/theming'

export default create ({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'rgb(234, 0, 133)',
  appContentBg: 'white',
  appBorderColor: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'rgb(255, 250, 250)',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBg: 'rgb(246, 153, 190)',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Pink Panther Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0019/2539/brand.gif?itok=97rSwE0a',
});