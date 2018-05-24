import {IEntityRef} from './entity-ref.interface';
import {IDataProcessingParameters} from './data-processing-parameters.interface';
import {IFlowControl} from './flow-control.interface';
import {IObsUnitControl} from './obs-unit-control.interface';
import {IUnitDependencies} from './unit-dependencies.interface';

export interface IObsPlan {
  scienceProcessingScript: string;
  runSciencePipeline: boolean;
  dataProcessingParameters: IDataProcessingParameters;
  flowControl: IFlowControl;
  ousStatusRef?: IEntityRef | null;
  entityPartId: string;
  almatype: string;
  name: string;
  note: string;
  obsUnitControl: IObsUnitControl;
  unitDependencies: IUnitDependencies;
  obsProjectRef?: IEntityRef | null;
  status: string;
}
