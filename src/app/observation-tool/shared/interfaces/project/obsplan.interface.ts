import {IObsUnitControl} from './obsunitcontrol.interface';

export interface IObsPlan {
  name: string;
  note: string;
  ObsUnitControl: IObsUnitControl;
  scienceProcessingScript: any;
  runSciencePipeline: boolean;
}
