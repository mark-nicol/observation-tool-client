import {ScienceGoalPageInterface} from '../interfaces/science-goal-page.interface';


export const SCIENCE_GOAL_PAGES: { [id: string]: ScienceGoalPageInterface } = {
  'general': {
    title: 'General',
    path: 'general',
    panels: {
      'general': {
        title: 'General',
        shown: true,
        data: {}
      }
    }
  },
  'fieldSetup': {
    title: 'Field Setup',
    path: 'field-setup',
    panels: {
      'query': {title: 'Image Query', shown: true, data: {} },
      'fov': {title: 'FOV Parameters', shown: true, data: {} },
      'field-source': {title: 'Source', shown: true, data: {} },
      'spatial': {title: 'Spatial Image', shown: true, data: {} },
      'expected': {title: 'Expected Source Properties', shown: true, data: {} },
      'field-centre': {title: 'Field Centre Coordinates', shown: true, data: {} }
    }
  },
  'spectralSetup': {
    title: 'Spectral Setup',
    path: 'spectral-setup',
    panels: {
      'spectralType': {title: 'Spectral Type', shown: true, data: {} },
      'visualisation': {title: 'Visualisation', shown: true, data: {} }
    }
  },
  'calibrationSetup': {
    title: 'Calibration Setup',
    path: 'calibration-setup',
    panels: {
      'goalCalibrators': {title: 'Goal Calibrators', shown: true, data: {}}
    }
  },
  'controlAndPerf': {
    title: 'Control and Performance',
    path: 'control-performance',
    panels: {
      'configInfo': {title: 'Configuration Information', shown: true, data: {} },
      'desiredPerf': {title: 'Desired Performance', shown: true, data: {} }
    }
  },
  'techJust': {
    title: 'Technical Justification',
    path: 'technical-justification',
    panels: {
      'sensitivity': {title: 'Sensitivity', shown: true, data: {} },
      'imaging': {title: 'Imaging', shown: true, data: {}},
      'correlatorInfo': {title: 'Correlator Information', shown: true, data: {} },
      'choices': {title: 'Choices to be Justified', shown: true, data: {} }
    }
  }
};
