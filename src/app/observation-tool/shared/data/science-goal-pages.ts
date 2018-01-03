import {ScienceGoalPageInterface} from '../interfaces/science-goal-page.interface';
import {FIELD_CENTRE_COORDINATES_DATA} from './field-setup/field-centre-coordinates';
import {FIELD_SOURCE_DATA} from './field-setup/source';


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
  'field-setup': {
    title: 'Field Setup',
    path: 'field-setup',
    panels: {
      'image-query': {title: 'Image Query', shown: true, data: {}},
      'fov-parameters': {title: 'FOV Parameters', shown: true, data: {}},
      'field-source': {title: 'Source', shown: true, data: FIELD_SOURCE_DATA},
      'spatial-image': {title: 'Spatial Image', shown: true, data: {}},
      'expected-source-properties': {title: 'Expected Source Properties', shown: true, data: {}},
      'field-centre-coordinates': {title: 'Field Centre Coordinates', shown: true, data: FIELD_CENTRE_COORDINATES_DATA}
    }
  },
  'spectral-setup': {
    title: 'Spectral Setup',
    path: 'spectral-setup',
    panels: {
      'spectralType': {title: 'Spectral Type', shown: true, data: {}},
      'visualisation': {title: 'Visualisation', shown: true, data: {}}
    }
  },
  'calibration-setup': {
    title: 'Calibration Setup',
    path: 'calibration-setup',
    panels: {
      'goalCalibrators': {title: 'Goal Calibrators', shown: true, data: {}}
    }
  },
  'control-performance': {
    title: 'Control and Performance',
    path: 'control-performance',
    panels: {
      'configInfo': {title: 'Configuration Information', shown: true, data: {}},
      'desiredPerf': {title: 'Desired Performance', shown: true, data: {}}
    }
  },
  'technical-justification': {
    title: 'Technical Justification',
    path: 'technical-justification',
    panels: {
      'sensitivity': {title: 'Sensitivity', shown: true, data: {}},
      'imaging': {title: 'Imaging', shown: true, data: {}},
      'correlatorInfo': {title: 'Correlator Information', shown: true, data: {}},
      'choices': {title: 'Choices to be Justified', shown: true, data: {}}
    }
  }
};
