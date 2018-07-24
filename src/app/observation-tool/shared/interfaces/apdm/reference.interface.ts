// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {Time} from '../../../../units/classes/time';

export interface IReference {
  referenceCoordinates: ISkyCoordinates;
  integrationTime: Time;
  cycleTime: Time;
  subScanDuration: Time;
}
