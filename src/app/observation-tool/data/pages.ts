import {Page} from '../interfaces/page';


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
  },
  'calibrationSetup': {
    title: 'Calibration Setup',
    path: 'calibrationSetup',
    panels: {
      'goalCalibrators': {title: 'Goal Calibrators', shown: true}
    }
  },
  'controlAndPerf': {
    title: 'Control and Performance',
    path: 'controlAndPerf',
    panels: {
      'configInfo': {title: 'Configuration Information', shown: true},
      'desiredPerf': {title: 'Desired Performance', shown: true}
    }
  },
  'techJust': {
    title: 'Technical Justification',
    path: 'techJust',
    panels: {
      'sensitivity': {title: 'Sensitivity', shown: true},
      'imaging': {title: 'Imaging', shown: true},
      'correlatorInfo': {title: 'Correlator Information', shown: true},
      'choices': {title: 'Choices to be Justified', shown: true}
    }
  }
};
