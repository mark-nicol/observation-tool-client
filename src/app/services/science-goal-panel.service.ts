import {Injectable} from '@angular/core';

@Injectable()
export class ScienceGoalPanelService {

  pages: { [id: string]: { title: string, path: string, panels: { [id: string]: { title: string, shown: boolean } } } } = {
    'general' : {
      title: 'General',
      path: 'general',
      panels: {
        'general': {title: 'general', shown: true}
      }
    },
    'fieldSetup': {
      title: 'Field Setup',
      path: 'fieldSetup',
      panels: {
        'query': {title: 'Image Query', shown: true},
        'fov': {title: 'FOV Parameters', shown: true},
        'field-source': {title: 'Source', shown: true},
        'spatial': {title: 'Spatial Image', shown: true},
        'expected': {title: 'Expected Source Properties', shown: true},
        'field-centre': {title: 'Field Centre Coordinates', shown: true},
      }
    },
    'spectralSetup': {
      title: 'Spectral Setup',
      path: 'spectralSetup',
      panels: {
        'spectralType': {title: 'Spectral Type', shown: true},
        'visualisation': {title: 'Visualisation', shown: true},
      }
    }
  };

  constructor() {
  }

  hiddenChange(page: string, panel: string) {
    this.pages[page].panels[panel].shown = !this.pages[page].panels[panel].shown;
  }

  getPage(key: string) {
    return this.pages[key].panels;
  }

}
