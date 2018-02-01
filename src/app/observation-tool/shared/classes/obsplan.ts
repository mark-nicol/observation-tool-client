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

}
