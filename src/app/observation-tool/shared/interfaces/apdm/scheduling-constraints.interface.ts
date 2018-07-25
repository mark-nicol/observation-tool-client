// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {ISchedBlockRef} from './entity-ref.interface';
import {Frequency} from '../../../../units/classes/frequency';
import {Angle} from '../../../../units/classes/angle';

export interface ISchedulingConstraints {
  representativeFrequency: Frequency;
  minAcceptableAngResolution: Angle;
  maxAcceptableAngResolution: Angle;
  dynamicRange: number;
  representativeCoordinates: ISkyCoordinates;
  requiredReceiverBands: string[];
  nominalConfiguration: string[];
  scienceGoalDesiredResolution: Angle;
  scienceGoalLargestAngularScale: Angle;
  isSimultaneous: boolean;
  simultaneousSbUid: string[];
  representativeTargetRef: ISchedBlockRef;
  representativeReceiverBand: string;
}
