// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {IAngleT} from './test';
import {IFieldPattern} from './field-pattern.interface';

export interface IFillPattern extends IFieldPattern {
  '@type': 'FillPatternT';
  patternCenterCoordinates: ISkyCoordinates;
  longitudeLength: IAngleT;
  latitudeLength: IAngleT;
  samplingLength: IAngleT;
  orientation: IAngleT;
  patternType: string;
  patternSubtype: string;
  scanningCoordinateSystem: string;
}
