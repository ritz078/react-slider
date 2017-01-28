import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
  name: 'React-slider',
  url: 'https://github.com/filter-components/react-slider',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true
});

import './base.scss'
import '../components/Slider/Slider.scss'

function loadStories () {
  require('../stories/Slider.range.story');
  require('../stories/Slider.value.story');
}

configure(loadStories, module);
