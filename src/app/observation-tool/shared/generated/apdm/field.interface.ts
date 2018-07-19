import {ISkyCoordinatesT} from './sky-coordinates.interface';

export interface IFieldT {
  '@type': 'CircleT' | 'PolygonT' | 'EllipseT' | 'RectangleT' | 'SinglePointT';
  name: string;
  centre: ISkyCoordinatesT;
}
