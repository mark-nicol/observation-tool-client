import {Angle} from '../../../../../units/classes/angle';
import {Frequency} from '../../../../../units/classes/frequency';
import {Sensitivity} from '../../../../../units/classes/sensitivity';

export interface IPerformanceParameters {
  prj_desiredAngularResolution: Angle;
  prj_desiredLargestScale: Angle;
  prj_desiredSensitivity: Sensitivity;
  prj_desiredDynamicRange: number;
  prj_representativeFrequency: Frequency;
  prj_useACA: boolean;
  prj_isTimeConstrained: boolean;
  prj_useTP: boolean;
  prj_desiredSDSensitivity: Sensitivity;
  prj_isPointSource: boolean;
  prj_desiredSensitivityReferenceFrequencyWidth: Frequency;
  desiredSensitivityFrequencyMeasure: string;
  prj_needsMoreTime: boolean;
  prj_desiredACASensitivity: Sensitivity;
  prj_desiredTPSensitivity: Sensitivity;
  prj_isScheduleConstrained: boolean;
  prj_desiredTime: string;
  timingConstraintsType: string;
  prj_acceptableAngularResolution: Angle;
  resolutionOption: string;
  prj_isSimultaneous12and7: boolean;
}
