import {ISkyCoordinatesT} from './sky-coordinates.interface';
import {IAngleT} from './test';
import {IFieldPatternT} from './field-pattern.interface';

export interface IRectanglePatternT extends IFieldPatternT {
  '@type': 'RectanglePatternT';
  patternCenterCoordinates: ISkyCoordinatesT;
  longitudeLength: IAngleT;
  latitudeLength: IAngleT;
  orthogonalStep: IAngleT;
  orientation: IAngleT;
  uniDirectionalScan: boolean;
  scanDirection: string;
  scanningCoordinateSystem: string;
}
