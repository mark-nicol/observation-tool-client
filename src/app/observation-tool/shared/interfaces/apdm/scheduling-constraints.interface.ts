// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {ISchedBlockRefT} from './apdm/entity-ref.interface';
import {IAngleT, IFrequencyT} from './test';

export interface ISchedulingConstraints {
  representativeFrequency: IFrequencyT;
  minAcceptableAngResolution: IAngleT;
  maxAcceptableAngResolution: IAngleT;
  dynamicRange: number;
  representativeCoordinates: ISkyCoordinates;
  requiredReceiverBands: string[];
  nominalConfiguration: string[];
  scienceGoalDesiredResolution: IAngleT;
  scienceGoalLargestAngularScale: IAngleT;
  isSimultaneous: boolean;
  simultaneousSbUid: string[];
  representativeTargetRef: ISchedBlockRefT;
  representativeReceiverBand: string;
}
