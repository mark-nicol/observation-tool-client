import {CalibrationSetupInterface} from './science-goal-interfaces/calibration-setup.interface';
import {ControlPerformanceInterface} from './science-goal-interfaces/control-performance.interface';
import {FieldSetupInterface} from './science-goal-interfaces/field-setup.interface';
import {ScienceGoalGeneralInterface} from './science-goal-interfaces/general.interface';
import {SpectralSetupInterface} from './science-goal-interfaces/spectral-setup.interface';
import {TechnicalJustificationInterface} from './science-goal-interfaces/technical-justification.interface';

export interface ScienceGoalInterface {
  name: string,
  general: ScienceGoalGeneralInterface,
  fieldSetup: FieldSetupInterface,
  spectralSetup: SpectralSetupInterface,
  calibrationSetup: CalibrationSetupInterface,
  controlPerformance: ControlPerformanceInterface,
  technicalJustification: TechnicalJustificationInterface
}
