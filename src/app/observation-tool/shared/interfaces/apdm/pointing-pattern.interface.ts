// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {IFieldPattern} from './field-pattern.interface';

export interface IPointingPattern extends IFieldPattern {
  '@type': 'PointingPatternT';
  phaseCenterCoordinates: ISkyCoordinates[];
  isMosaic: boolean;
}
