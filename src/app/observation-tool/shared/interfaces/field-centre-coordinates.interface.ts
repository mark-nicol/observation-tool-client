import {Angle} from '../../../units/classes/angle';
import {Latitude} from '../../../units/classes/latitude';
import {Longitude} from '../../../units/classes/longitude';

/**
 * Interface for the Field Centre Coordinates Component page data
 */

export interface FieldCentreCoordinatesInterface {
  /** The currently chosen coordinates type */
  coordType: string,
  /** Data for if individual component is being used */
  individual: {
    offsetUnit: string,
    rows: [
      {
        lat: Latitude,
        lon: Longitude
      }
      ]
  },
  /** Data for if rectangular component is being used */
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
