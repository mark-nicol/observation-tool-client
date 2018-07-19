import {ISkyCoordinatesT} from './sky-coordinates.interface';
import {IAngleT} from './test';
import {IFieldPatternT} from './field-pattern.interface';

export interface IFillPatternT extends IFieldPatternT {
  '@type': 'FillPatternT';
  patternCenterCoordinates: ISkyCoordinatesT;
  longitudeLength: IAngleT;
  latitudeLength: IAngleT;
  samplingLength: IAngleT;
  orientation: IAngleT;
  patternType: string;
  patternSubtype: string;
  scanningCoordinateSystem: string;
}
