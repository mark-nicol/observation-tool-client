import {Latitude} from '../../units/classes/latitude';
import {Longitude} from '../../units/classes/longitude';
import {Angle} from '../../units/classes/angle';

export interface FieldCentreCoordinatesInterface {
  coordType: string,
  individual: {
    offsetUnit: string,
    rows: [
      {
        lat: Latitude,
        lon: Longitude
      }
      ]
  },
  rectangular: {
    chosenSystem: string,
    sexagesimalUnits: boolean,
    lonOffset: Angle,
    latOffset: Angle,
    pLength: Angle,
    qLength: Angle,
    positionAngle: Angle,
    spacing: number,
    spacingUnits: string
  }
}
