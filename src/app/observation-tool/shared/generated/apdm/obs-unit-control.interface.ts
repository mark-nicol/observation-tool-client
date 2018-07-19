import {IControlBlockT} from '../control-block.interface';
import {ICalibrationRequirementsT} from '../calibration-requirements.interface';

export interface IObsUnitControlT extends IControlBlockT {
  CalibrationRequirements: ICalibrationRequirementsT;
}

