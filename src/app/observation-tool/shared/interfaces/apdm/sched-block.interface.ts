// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

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
import {IObsUnit} from './obs-unit.interface';
import {ISchedBlockEntity} from './entity.interface';
import {IObsProjectRef, ISBStatusRef} from './entity-ref.interface';
import {IObservingParametersUnion} from './observing-parameters.interface';
import {ITimeAllocationBreakdown} from './time-allocation-breakdown.interface';

export interface ISchedBlock extends IObsUnit {
  '@type': 'SchedBlock';
  SchedBlockEntity: ISchedBlockEntity;
  SBStatusRef: ISBStatusRef;
  obsUnitSetRef: IObsProjectRef;
  standardMode: boolean;
  modeName: string;
  pIName: string;
  expertParameter: IKeywordValue[];
  qa0Notes: string;
  OpticalCameraSpec: IOpticalCameraSpec[];
  SpectralSpec: ISpectralSpec[];
  FieldSource: IFieldSource[];
  observingGroup: IObservingGroup[];
  amplitudeCalParametersOrAtmosphericCalParametersOrBandpassCalParameters: IObservingParametersUnion[];
  obsProcedure: IObsProcedure;
  Preconditions: IPreconditions;
  SchedBlockControl: ISchedBlockControl;
  SchedulingConstraints: ISchedulingConstraints;
  Target: ITarget[];
  TemporalConstraints: ITemporalConstraints[];
  TimeAllocationBreakdown: ITimeAllocationBreakdown;
  schemaVersion: string;
  revision: string;
  almatype: string;
  modeType: string;
}
