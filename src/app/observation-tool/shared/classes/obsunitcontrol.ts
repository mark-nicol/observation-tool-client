import {IObsUnitControl} from '../interfaces/project/obsunitcontrol.interface';

export class ObsUnitControl implements IObsUnitControl {

  arrayRequested: string;
  userPriority: number;
  tacPriority: number;
  aggregatedExecutionCount: number;

  constructor(arrayRequested?: string,
              userPriority?: number,
              tacPriority?: number,
              aggregatedExecutionCount?: number) {
    this.arrayRequested = arrayRequested;
    this.userPriority = userPriority;
    this.tacPriority = tacPriority;
    this.aggregatedExecutionCount = aggregatedExecutionCount;}

  initFromJson(json: any) {
    console.log(ObsUnitControl.name, 'initFromJson');
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
