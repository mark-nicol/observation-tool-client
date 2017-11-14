"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var source_1 = require("./field-setup/source");
var field_centre_coordinates_1 = require("./field-setup/field-centre-coordinates");
exports.SCIENCE_GOAL_PAGES = {
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
            'image-query': { title: 'Image Query', shown: true, data: {} },
            'fov-parameters': { title: 'FOV Parameters', shown: true, data: {} },
            'field-source': { title: 'Source', shown: true, data: source_1.FIELD_SOURCE_DATA },
            'spatial-image': { title: 'Spatial Image', shown: true, data: {} },
            'expected-source-properties': { title: 'Expected Source Properties', shown: true, data: {} },
            'field-centre-coordinates': { title: 'Field Centre Coordinates', shown: true, data: field_centre_coordinates_1.FIELD_CENTRE_COORDINATES_DATA }
        }
    },
    'spectral-setup': {
        title: 'Spectral Setup',
        path: 'spectral-setup',
        panels: {
            'spectralType': { title: 'Spectral Type', shown: true, data: {} },
            'visualisation': { title: 'Visualisation', shown: true, data: {} }
        }
    },
    'calibration-setup': {
        title: 'Calibration Setup',
        path: 'calibration-setup',
        panels: {
            'goalCalibrators': { title: 'Goal Calibrators', shown: true, data: {} }
        }
    },
    'control-performance': {
        title: 'Control and Performance',
        path: 'control-performance',
        panels: {
            'configInfo': { title: 'Configuration Information', shown: true, data: {} },
            'desiredPerf': { title: 'Desired Performance', shown: true, data: {} }
        }
    },
    'technical-justification': {
        title: 'Technical Justification',
        path: 'technical-justification',
        panels: {
            'sensitivity': { title: 'Sensitivity', shown: true, data: {} },
            'imaging': { title: 'Imaging', shown: true, data: {} },
            'correlatorInfo': { title: 'Correlator Information', shown: true, data: {} },
            'choices': { title: 'Choices to be Justified', shown: true, data: {} }
        }
    }
};
