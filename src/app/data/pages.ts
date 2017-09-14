import {Page} from '../models/page';


export const PAGES: { [id: string]: Page } = {
  'general': {
    title: 'General',
    path: 'general',
    panels: {
      'general': {
        title: 'General',
        shown: true
      }
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
      'field-centre': {title: 'Field Centre Coordinates', shown: true}
    }
  },
  'spectralSetup': {
    title: 'Spectral Setup',
    path: 'spectralSetup',
    panels: {
      'spectralType': {title: 'Spectral Type', shown: true},
      'visualisation': {title: 'Visualisation', shown: true}
    }
  }
};
