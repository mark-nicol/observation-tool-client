import {CoordSystem} from './coord-system.interface';
import {Latitude} from '../../units/classes/latitude';
import {Longitude} from '../../units/classes/longitude';
import {Angle} from '../../units/classes/angle';
import {AngularVelocity} from '../../units/classes/angular-velocity';
import {Speed} from '../../units/classes/speed';

/**
 * Interface to define data in the ScienceGoal/FieldSetup/Source component
 */

export interface SourceComponentInterface {
  sourceName: string,
  solarSystemObject: boolean,
  chosenSolarObject: string,
  targetType: string,
  chosenSystem: CoordSystem,
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
