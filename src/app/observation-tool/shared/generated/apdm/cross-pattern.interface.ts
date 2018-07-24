// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {IAngleT, IAngularVelocityT} from './test';
import {IFieldPattern} from './field-pattern.interface';

export interface ICrossPattern extends IFieldPattern {
  '@type': 'CrossPatternT';
  patternCenterCoordinates: ISkyCoordinates;
  longitudeLength: IAngleT;
  latitudeLength: IAngleT;
  scanVelocity: IAngularVelocityT;
  orientation: IAngleT;
  initialScanDirection: string;
}
