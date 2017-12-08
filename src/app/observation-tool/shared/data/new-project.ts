import {ProjectInterface} from '../interfaces/project.interface';

export const NEW_PROJECT: ProjectInterface = {
  project: {
    principleInvestigator: null,
    priority: 1,
    projectCode: 'ABC123'
  },
  proposal: {
    title: null,
    cycle: null,
    abstract: null,
    proposalType: 'regular',
    scientificCategory: 'cosmology',
    keywords: null,
    studentProject: false,
    relatedProposals: null,
    previousProposals: null,
    investigators: null,
    scienceCase: null,
    duplicateObservations: null
  },
  scienceGoals: {
    1: {
      name: null,
      general: null,
      fieldSetup: null,
      spectralSetup: null,
      calibrationSetup: null,
      controlPerformance: null,
      technicalJustification: null
    }
  }
};
