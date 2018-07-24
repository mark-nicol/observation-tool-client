// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObsUnitT} from './apdm/obs-unit.interface';
import {ISchedBlockEntityT} from './apdm/entity.interface';
import {IObsProjectRefT, ISBStatusRefT} from './apdm/entity-ref.interface';
import {ITimeAllocationBreakdownT} from './apdm/time-allocation-breakdown.interface';
import {
  IObservingParametersTUnion} from './test';
import {IKeywordValue} from './keyword-value.interface';
import {IOpticalCameraSpec} from './optical-camera-spec.interface';
import {ISpectralSpec} from './spectral-spec.interface';
import {IFieldSource} from './field-source.interface';
import {IObservingGroup} from './observing-group.interface';
import {IObsProcedure} from './obs-procedure.interface';
import {IPreconditions} from './preconditions.interface';
import {ISchedBlockControl} from './sched-block-control.interface';
import {ISchedulingConstraints} from './scheduling-constraints.interface';
import {ITarget} from './target.interface';
import {ITemporalConstraints} from './temporal-constraints.interface';

export interface ISchedBlock extends IObsUnitT {
  '@type': 'SchedBlock';
  SchedBlockEntity: ISchedBlockEntityT;
  SBStatusRef: ISBStatusRefT;
  obsUnitSetRef: IObsProjectRefT;
  standardMode: boolean;
  modeName: string;
  pIName: string;
  expertParameter: IKeywordValue[];
  qa0Notes: string;
  OpticalCameraSpec: IOpticalCameraSpec[];
  SpectralSpec: ISpectralSpec[];
  FieldSource: IFieldSource[];
  observingGroup: IObservingGroup[];
  amplitudeCalParametersOrAtmosphericCalParametersOrBandpassCalParameters: IObservingParametersTUnion[];
  obsProcedure: IObsProcedure;
  Preconditions: IPreconditions;
  SchedBlockControl: ISchedBlockControl;
  SchedulingConstraints: ISchedulingConstraints;
  Target: ITarget[];
  TemporalConstraints: ITemporalConstraints[];
  TimeAllocationBreakdown: ITimeAllocationBreakdownT;
  schemaVersion: string;
  revision: string;
  almatype: string;
  modeType: string;
}
