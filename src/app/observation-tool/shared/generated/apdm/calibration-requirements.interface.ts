import {IAngleT} from './test';

export interface ICalibrationRequirementsT {
  pointingAccuracy: IAngleT;
  bandpassAccuracy: number;
  polarizationAccuracy: number;
}
