import {IObsUnitT} from './apdm/obs-unit.interface';
import {ISchedBlockEntityT} from './apdm/entity.interface';
import {IObsProjectRefT, ISBStatusRefT} from './apdm/entity-ref.interface';
import {ITimeAllocationBreakdownT} from './apdm/time-allocation-breakdown.interface';
import {
  IObservingParametersTUnion} from './test';
import {IKeywordValueT} from './keyword-value.interface';
import {IOpticalCameraSpecT} from './optical-camera-spec.interface';
import {ISpectralSpecT} from './spectral-spec.interface';
import {IFieldSourceT} from './field-source.interface';
import {IObservingGroupT} from './observing-group.interface';
import {IObsProcedureT} from './obs-procedure.interface';
import {IPreconditionsT} from './preconditions.interface';
import {ISchedBlockControlT} from './sched-block-control.interface';
import {ISchedulingConstraintsT} from './scheduling-constraints.interface';
import {ITargetT} from './target.interface';
import {ITemporalConstraintsT} from './temporal-constraints.interface';

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
