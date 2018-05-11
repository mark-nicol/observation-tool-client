import {ISkyCoordinates} from '../../../interfaces/project/science-goal/target-parameters.interface';
import {Longitude} from '../../../../../units/classes/longitude';
import {Latitude} from '../../../../../units/classes/latitude';

export class SkyCoordinates implements ISkyCoordinates {
  system: string;
  type: string;
  val_fieldName: string;
  val_latitude: Latitude;
  val_longitude: Longitude;

  constructor() {

  }
}
