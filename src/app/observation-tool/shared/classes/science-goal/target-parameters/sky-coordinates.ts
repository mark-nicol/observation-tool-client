import {ISkyCoordinates} from '../../../interfaces/project/science-goal/target-parameters.interface';
import {Longitude} from '../../../../../units/classes/longitude';
import {Latitude} from '../../../../../units/classes/latitude';

export class SkyCoordinates implements ISkyCoordinates {
  system: string;
  type: string;
  fieldName: string;
  latitude: Latitude;
  longitude: Longitude;

  constructor() {

  }
}
