import {ICalibrationSetupParameters} from '../../interfaces/project/science-goal/calibration-setup-parameters.interface';

export class CalibrationSetupParameters implements ICalibrationSetupParameters {

  selection: string;

  constructor(selection?: string) {
    this.selection = selection;
  }

  initFromJson(json: any) {
    Object.keys(this).forEach(key => {
      if (json['prj:' + key] !== undefined) {
        this[key] = json['prj:' + key];
      } else if (json['prp:' + key] !== undefined) {
        this[key] = json['prp:' + key];
      } else {
        this[key] = json[key];
      }
    });
    return this;
  }

}
