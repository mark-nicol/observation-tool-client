// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {ICircle} from './circle.interface';
import {IPolygon} from './polygon.interface';
import {IEllipse} from './ellipse.interface';
import {IRectangle} from './rectangle.interface';
import {ISinglePoint} from './single-point.interface';

export interface IField {
  '@type': 'CircleT' | 'PolygonT' | 'EllipseT' | 'RectangleT' | 'SinglePointT';
  name: string;
  centre: ISkyCoordinates;
}

export type IFieldUnion = ICircle | IPolygon | IEllipse | IRectangle | ISinglePoint;
