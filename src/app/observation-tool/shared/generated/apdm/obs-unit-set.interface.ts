import {IOUSStatusRefT, ISchedBlockRefT} from './entity-ref.interface';
import {IObsUnitT} from './obs-unit.interface';
import {IDataProcessingParametersT} from './data-processing-parameters.interface';
import {IFlowControlT} from './flow-control.interface';

export interface IObsUnitSetT extends IObsUnitT {
  '@type': 'ObsUnitSetT';
  entityPartId: string;
  scienceProcessingScript: string;
  runSciencePipeline: boolean;
  DataProcessingParameters: IDataProcessingParametersT;
  FlowControl: IFlowControlT;
  obsUnitSet: IObsUnitSetT[];
  SchedBlockRef: ISchedBlockRefT[];
  OUSStatusRef: IOUSStatusRefT;
  almatype: string;
}
