import {Angle} from '../../../../units/classes/angle';

export interface ICalibrationRequirements {
  pointingAccuracy: Angle;
  bandpassAccuracy: number;
  polarizationAccuracy: number;
}
