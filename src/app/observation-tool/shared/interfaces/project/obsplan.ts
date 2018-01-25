import {IAlmaProjectDataModel} from './almaprojectdatamodel';
import {IObsUnitControl} from './obsunitcontrol';

export interface IObsPlan extends IAlmaProjectDataModel {
  name: string;
  note: string;
  ObsUnitControl: IObsUnitControl;
  scienceProcessingScript: any;
  runSciencePipeline: boolean;
}
