import {Injectable} from '@angular/core';

@Injectable()
export class ScienceGoalPanelService {

  pages: { [id: string]: { title: string, path: string, panels: { [id: string]: { title: string, shown: boolean } } } } = {
    'field': {
      title: 'Field Setup',
      path: '',
      panels: {
        'query': {title: 'Image Query', shown: true},
        'fov': {title: 'FOV Parameters', shown: true},
        'field-source': {title: 'Source', shown: true},
        'spatial': {title: 'Spatial Image', shown: true},
        'expected': {title: 'Expected Source Properties', shown: true},
        'field-centre': {title: 'Field Centre Coordinates', shown: true},
      }
    },
    'spectral': {
      title: 'Spectral Setup',
      path: '',
      panels: {
        'type': {title: 'Spectral Type', shown: true},
        'visualisation': {title: 'Visualisation', shown: true},
      }
    }
  };

  constructor() {
  }

  showPanel(page: string, panel: string) {
    if (this.pages[page].panels[panel].shown === false)
      this.pages[page].panels[panel].shown = true;
  }

  hidePanel(page: string, panel: string) {
    if (this.pages[page].panels[panel].shown === true)
      this.pages[page].panels[panel].shown = false;
  }

}
