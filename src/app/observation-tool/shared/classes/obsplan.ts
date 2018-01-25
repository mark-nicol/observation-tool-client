import {IObsPlan} from '../interfaces/project/obsplan';
import {IObsUnitControl} from '../interfaces/project/obsunitcontrol';
import {ObsUnitControl} from './obsunitcontrol';

export class ObsPlan implements IObsPlan {

  name: string;
  note: string;
  ObsUnitControl: IObsUnitControl;
  scienceProcessingScript: any;
  runSciencePipeline: boolean;

  initFromJson(json: any) {
    console.log('ObsPlan', 'initFromJson');
    this.name                    = json['prj:name'];
    this.note                    = json['prj:note'];
    this.ObsUnitControl          = new ObsUnitControl().initFromJson(json['prj:ObsUnitControl']);
    this.scienceProcessingScript = json['prj:scienceProcessingScript'];
    this.runSciencePipeline      = json['prj:runSciencePipeline'];
    return this;
  }

}
