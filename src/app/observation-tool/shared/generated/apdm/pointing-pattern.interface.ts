import {ISkyCoordinatesT} from './sky-coordinates.interface';
import {IFieldPatternT} from './field-pattern.interface';

export interface IPointingPatternT extends IFieldPatternT {
  '@type': 'PointingPatternT';
  phaseCenterCoordinates: ISkyCoordinatesT[];
  isMosaic: boolean;
}
