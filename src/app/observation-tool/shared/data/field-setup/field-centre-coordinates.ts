import {FieldCentreCoordinatesInterface} from '../../interfaces/field-centre-coordinates.interface';
import {Latitude} from '../../../../units/classes/latitude';
import {Longitude} from '../../../../units/classes/longitude';
import {Angle} from '../../../../units/classes/angle';

export const FIELD_CENTRE_COORDINATES_DATA: FieldCentreCoordinatesInterface = {
  coordType: 'relative',
  /** Data for if individual component is being used */
  individual: {
    offsetUnit: 'mas',
    rows: [
      {
        lat: new Latitude(),
        lon: new Longitude()
      }
    ]
  },
  /** Data for if rectangular component is being used */
  rectangular: {
    chosenSystem: 'ICRS',
    sexagesimalUnits: false,
    lonOffset: new Angle(),
    latOffset: new Angle(),
    pLength: new Angle(),
    qLength: new Angle(),
    positionAngle: new Angle(),
    spacing: 0.51093,
    spacingUnits: 'Fraction of antenna beamsize'
  }
}
