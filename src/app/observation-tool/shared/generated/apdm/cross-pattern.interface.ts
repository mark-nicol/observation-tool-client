import {ISkyCoordinatesT} from './sky-coordinates.interface';
import {IAngleT, IAngularVelocityT} from './test';
import {IFieldPatternT} from './field-pattern.interface';

export interface ICrossPatternT extends IFieldPatternT {
  '@type': 'CrossPatternT';
  patternCenterCoordinates: ISkyCoordinatesT;
  longitudeLength: IAngleT;
  latitudeLength: IAngleT;
  scanVelocity: IAngularVelocityT;
  orientation: IAngleT;
  initialScanDirection: string;
}
