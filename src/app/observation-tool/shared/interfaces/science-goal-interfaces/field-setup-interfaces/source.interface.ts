import {Angle} from '../../../../../units/classes/angle';
import {AngularVelocity} from '../../../../../units/classes/angular-velocity';
import {Latitude} from '../../../../../units/classes/latitude';
import {Longitude} from '../../../../../units/classes/longitude';
import {Speed} from '../../../../../units/classes/speed';
/**
 * Interface to define data in the ScienceGoal/FieldSetup/Source component
 */
import {CoordSystemInterface} from '../../coord-system.interface';
import {ExpectedSourcePropertiesInterface} from './expected-source-properties.interface';
import {FieldCentreCoordinatesInterface} from './field-centre-coordinates.interface';


export interface SourceInterface {
  sourceName: string,
  solarSystemObject: boolean,
  chosenSolarObject: string,
  targetType: string,
  chosenSystem: string,
  sexagesimalUnits: boolean,
  lat: Latitude,
  lon: Longitude,
  parallax: Angle,
  properMotionCross: AngularVelocity,
  properMotionDeclination: AngularVelocity,
  radialVelocity: Speed,
  radialVelocityReferenceFrame: string,
  redshift: number,
  dopplerType: string,
  expectedSourceProperties: ExpectedSourcePropertiesInterface,
  fieldCentreCoordinates: FieldCentreCoordinatesInterface
}
