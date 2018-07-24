// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {IFieldPattern} from './field-pattern.interface';
import {Angle} from '../../../../units/classes/angle';

export interface IRectanglePattern extends IFieldPattern {
  '@type': 'RectanglePatternT';
  patternCenterCoordinates: ISkyCoordinates;
  longitudeLength: Angle;
  latitudeLength: Angle;
  orthogonalStep: Angle;
  orientation: Angle;
  uniDirectionalScan: boolean;
  scanDirection: string;
  scanningCoordinateSystem: string;
}
