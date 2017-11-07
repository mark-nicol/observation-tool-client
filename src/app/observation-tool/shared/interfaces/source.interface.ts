import {Angle} from '../../../units/classes/angle';
import {AngularVelocity} from '../../../units/classes/angular-velocity';
import {Latitude} from '../../../units/classes/latitude';
import {Longitude} from '../../../units/classes/longitude';
import {Speed} from '../../../units/classes/speed';
import {CoordSystemInterface} from './coord-system.interface';

/**
 * Interface to define data in the ScienceGoal/FieldSetup/Source component
 */

export interface SourceComponentInterface {
  sourceName: string,
  solarSystemObject: boolean,
  chosenSolarObject: string,
  targetType: string,
  chosenSystem: CoordSystemInterface,
  sexagesimalUnits: boolean,
  lat: Latitude,
  lon: Longitude,
  parallax: Angle,
  properMotionCross: AngularVelocity,
  properMotionDeclination: AngularVelocity,
  radialVelocity: Speed,
  radialVelocityReferenceFrame: string,
  redshift: number,
  dopplerType: string
}
