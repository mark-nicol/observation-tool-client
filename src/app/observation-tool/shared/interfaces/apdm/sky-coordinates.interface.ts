import {Longitude} from '../../../../units/classes/longitude';
import {Latitude} from '../../../../units/classes/latitude';

export interface ISkyCoordinates {
  longitude: Longitude;
  latitude: Latitude;
  fieldName: string;
  system: string;
  type: string;
}
