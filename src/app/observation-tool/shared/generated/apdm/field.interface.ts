// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';

export interface IField {
  '@type': 'CircleT' | 'PolygonT' | 'EllipseT' | 'RectangleT' | 'SinglePointT';
  name: string;
  centre: ISkyCoordinates;
}
