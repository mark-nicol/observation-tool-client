// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {IFieldPattern} from './field-pattern.interface';
import {Angle} from '../../../../units/classes/angle';
import {AngularVelocity} from '../../../../units/classes/angular-velocity';

export interface ICrossPattern extends IFieldPattern {
  '@type': 'CrossPatternT';
  patternCenterCoordinates: ISkyCoordinates;
  longitudeLength: Angle;
  latitudeLength: Angle;
  scanVelocity: AngularVelocity;
  orientation: Angle;
  initialScanDirection: string;
}
