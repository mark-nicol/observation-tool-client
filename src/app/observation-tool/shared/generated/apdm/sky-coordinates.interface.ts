import {ILatitudeT, ILongitudeT} from './test';

export interface ISkyCoordinatesT {
  longitude: ILongitudeT;
  latitude: ILatitudeT;
  fieldName: string;
  system: string;
  type: string;
}
