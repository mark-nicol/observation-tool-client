// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IOUSStatusRef, ISchedBlockRef} from './entity-ref.interface';
import {IObsUnit} from './obs-unit.interface';
import {IDataProcessingParameters} from './data-processing-parameters.interface';
import {IFlowControl} from './flow-control.interface';

export interface IObsUnitSet extends IObsUnit {
  '@type': 'ObsUnitSetT';
  entityPartId: string;
  scienceProcessingScript: string;
  runSciencePipeline: boolean;
  DataProcessingParameters: IDataProcessingParameters;
  FlowControl: IFlowControl;
  obsUnitSet: IObsUnitSet[];
  SchedBlockRef: ISchedBlockRef[];
  OUSStatusRef: IOUSStatusRef;
  almatype: string;
}
