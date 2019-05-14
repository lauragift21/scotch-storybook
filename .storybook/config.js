import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import pinkPanther from './pinkPanther'

addParameters({
  options: {
    theme: pinkPanther
  }
})

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
