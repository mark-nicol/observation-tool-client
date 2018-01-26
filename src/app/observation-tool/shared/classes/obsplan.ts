import {IObsPlan} from '../interfaces/project/obsplan.interface';
import {IObsUnitControl} from '../interfaces/project/obsunitcontrol.interface';
import {ObsUnitControl} from './obsunitcontrol';

export class ObsPlan implements IObsPlan {

  name: string;
  note: string;
  ObsUnitControl: IObsUnitControl;
  scienceProcessingScript: any;
  runSciencePipeline: boolean;

  constructor(name?: string,
              note?: string,
              obsUnitControl?: IObsUnitControl,
              scienceProcessingScript?: any,
              runSciencePipeline?: boolean) {
    this.name                    = name;
    this.note                    = note;
    this.ObsUnitControl          = obsUnitControl;
    this.scienceProcessingScript = scienceProcessingScript;
    this.runSciencePipeline      = runSciencePipeline;
  }

  initFromJson(json: any) {
    console.log('ObsPlan', 'initFromJson');
    Object.keys(this).forEach(key => {
      if (json['prj:' + key] !== undefined) {
        this[key] = json['prj:' + key];
      } else if (json['prp:' + key] !== undefined) {
        this[key] = json['prp:' + key];
      } else {
        this[key] = json[key];
      }
    });
    this.ObsUnitControl = new ObsUnitControl().initFromJson(json['prj:ObsUnitControl']);
    return this;
  }

}
