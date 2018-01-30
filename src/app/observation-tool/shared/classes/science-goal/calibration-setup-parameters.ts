import {ICalibrationSetupParameters} from '../../interfaces/project/science-goal/calibration-setup-parameters.interface';

export class CalibrationSetupParameters implements ICalibrationSetupParameters {

  selection: string;

  constructor(selection?: string) {
    this.selection = selection;
  }

}
