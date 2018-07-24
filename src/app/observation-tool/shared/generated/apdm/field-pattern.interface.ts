// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IPointingPattern} from './pointing-pattern.interface';
import {IRectanglePattern} from './rectangle-pattern.interface';
import {IFillPattern} from './fill-pattern.interface';
import {ICrossPattern} from './cross-pattern.interface';

export interface IFieldPattern {
  '@type': 'CrossPatternT' | 'FillPatternT' | 'PointingPatternT' | 'RectanglePatternT';
  type: string;
}

export type IFieldPatternUnion = IPointingPattern | IRectanglePattern | IFillPattern | ICrossPattern;
