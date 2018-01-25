import {IObsUnitControl} from '../interfaces/project/obsunitcontrol';

export class ObsUnitControl implements IObsUnitControl {
  arrayRequested: string;
  userPriority: number;
  tacPriority: number;
  aggregatedExecutionCount: number;

  initFromJson(json: any) {
    console.log(ObsUnitControl.name, 'initFromJson');
    this.arrayRequested           = json.arrayRequested;
    this.userPriority             = json['prj:userPriority'];
    this.tacPriority              = json['prj:tacPriority'];
    this.aggregatedExecutionCount = json['prj:aggregatedExecutionCount'];
    return this;
  }

}
