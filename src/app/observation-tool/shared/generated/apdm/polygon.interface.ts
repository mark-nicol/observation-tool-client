import {IFieldT} from './field.interface';
import {ISkyCoordinatesT} from './sky-coordinates.interface';

export interface IPolygonT extends IFieldT {
  '@type': 'PolygonT';
  points: ISkyCoordinatesT[];
}
