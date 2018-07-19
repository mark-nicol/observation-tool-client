import {ICalibrationTargetParametersT} from '../calibration-target-parameters.interface';

export interface ICalibrationSetupParametersT {
  CalibrationTargetParameters: ICalibrationTargetParametersT[];
  selection: string;
}
