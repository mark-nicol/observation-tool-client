import {ISkyCoordinatesT} from './sky-coordinates.interface';
import {ITimeT} from './test';

export interface IReferenceT {
  referenceCoordinates: ISkyCoordinatesT;
  integrationTime: ITimeT;
  cycleTime: ITimeT;
  subScanDuration: ITimeT;
}
