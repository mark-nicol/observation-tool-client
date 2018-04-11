import {Angle} from '../../../../units/classes/angle';
import {Frequency} from '../../../../units/classes/frequency';
import {Sensitivity} from '../../../../units/classes/sensitivity';
import {IPerformanceParameters} from '../../interfaces/project/science-goal/performance-parameters.interface';

export class PerformanceParameters implements IPerformanceParameters {
  desiredSensitivityFrequencyMeasure: string;
  prj_acceptableAngularResolution: Angle;
  prj_desiredACASensitivity: Sensitivity;
  prj_desiredAngularResolution: Angle;
  prj_desiredDynamicRange: number;
  prj_desiredLargestScale: Angle;
  prj_desiredSDSensitivity: Sensitivity;
  prj_desiredSensitivity: Sensitivity;
  prj_desiredSensitivityReferenceFrequencyWidth: Frequency;
  prj_desiredTPSensitivity: Sensitivity;
  prj_desiredTime: string;
  prj_isPointSource: boolean;
  prj_isScheduleConstrained: boolean;
  prj_isSimultaneous12and7: boolean;
  prj_isTimeConstrained: boolean;
  prj_needsMoreTime: boolean;
  prj_representativeFrequency: Frequency;
  prj_useACA: boolean;
  prj_useTP: boolean;
  resolutionOption: string;
  timingConstraintsType: string;
}
