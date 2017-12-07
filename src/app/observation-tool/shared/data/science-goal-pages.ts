import {ScienceGoalPageInterface} from '../interfaces/science-goal-page.interface';
import {FIELD_CENTRE_COORDINATES_DATA} from './field-setup/field-centre-coordinates';
import {FIELD_SOURCE_DATA} from './field-setup/source';


export const SCIENCE_GOAL_PAGES: { [id: string]: ScienceGoalPageInterface } = {
  'general': {
    title: 'General',
    path: 'general',
    sections: {
      'general': {title: 'General', data: {}}
    }
  },
  'field-setup': {
    title: 'Field Setup',
    path: 'field-setup',
    sections: {
      'image-query':    {title: 'Image Query',    data: {}},
      'fov-parameters': {title: 'FOV Parameters', data: {}},
      'field-source':   {title: 'Source',         data: FIELD_SOURCE_DATA},
      'spatial-image':  {title: 'Spatial Image',  data: {}},
      'expected-source-properties': {title: 'Expected Source Properties', data: {}},
      'field-centre-coordinates':   {title: 'Field Centre Coordinates',   data: FIELD_CENTRE_COORDINATES_DATA}
    }
  },
  'spectral-setup': {
    title: 'Spectral Setup',
    path: 'spectral-setup',
    sections: {
      'spectralType':  {title: 'Spectral Type', data: {}},
      'visualisation': {title: 'Visualisation', data: {}}
    }
  },
  'calibration-setup': {
    title: 'Calibration Setup',
    path: 'calibration-setup',
    sections: {
      'goalCalibrators': {title: 'Goal Calibrators', data: {}}
    }
  },
  'control-performance': {
    title: 'Control and Performance',
    path: 'control-performance',
    sections: {
      'configInfo':  {title: 'Configuration Information', data: {}},
      'desiredPerf': {title: 'Desired Performance',       data: {}}
    }
  },
  'technical-justification': {
    title: 'Technical Justification',
    path: 'technical-justification',
    sections: {
      'sensitivity':    {title: 'Sensitivity',             data: {}},
      'imaging':        {title: 'Imaging',                 data: {}},
      'correlatorInfo': {title: 'Correlator Information',  data: {}},
      'choices':        {title: 'Choices to be Justified', data: {}}
    }
  }
};
