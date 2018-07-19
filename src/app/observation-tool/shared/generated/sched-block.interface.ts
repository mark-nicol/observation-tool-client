import {IObsUnitT} from './apdm/obs-unit.interface';
import {ISchedBlockEntityT} from './apdm/entity.interface';
import {IObsProjectRefT, ISBStatusRefT} from './apdm/entity-ref.interface';
import {ITimeAllocationBreakdownT} from './apdm/time-allocation-breakdown.interface';
import {
  IFieldSourceT,
  IKeywordValueT,
  IObservingGroupT,
  IObservingParametersTUnion,
  IObsProcedureT,
  IOpticalCameraSpecT,
  IPreconditionsT,
  ISchedBlockControlT,
  ISchedulingConstraintsT,
  ISpectralSpecT,
  ITargetT,
  ITemporalConstraintsT
} from './test';

export interface ISchedBlock extends IObsUnitT {
  '@type': 'SchedBlock';
  SchedBlockEntity: ISchedBlockEntityT;
  SBStatusRef: ISBStatusRefT;
  obsUnitSetRef: IObsProjectRefT;
  standardMode: boolean;
  modeName: string;
  pIName: string;
  expertParameter: IKeywordValueT[];
  qa0Notes: string;
  OpticalCameraSpec: IOpticalCameraSpecT[];
  SpectralSpec: ISpectralSpecT[];
  FieldSource: IFieldSourceT[];
  observingGroup: IObservingGroupT[];
  amplitudeCalParametersOrAtmosphericCalParametersOrBandpassCalParameters: IObservingParametersTUnion[];
  obsProcedure: IObsProcedureT;
  Preconditions: IPreconditionsT;
  SchedBlockControl: ISchedBlockControlT;
  SchedulingConstraints: ISchedulingConstraintsT;
  Target: ITargetT[];
  TemporalConstraints: ITemporalConstraintsT[];
  TimeAllocationBreakdown: ITimeAllocationBreakdownT;
  schemaVersion: string;
  revision: string;
  almatype: string;
  modeType: string;
}
