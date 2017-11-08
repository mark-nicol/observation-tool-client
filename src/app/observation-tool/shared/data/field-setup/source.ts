import {Speed} from '../../../../units/classes/speed';
import {AngularVelocity} from '../../../../units/classes/angular-velocity';
import {Angle} from '../../../../units/classes/angle';
import {Longitude} from '../../../../units/classes/longitude';
import {Latitude} from '../../../../units/classes/latitude';

export const FIELD_SOURCE_DATA = {
  sourceName: '',
  solarSystemObject: false,
  chosenSolarObject: 'Mercury',
  targetType: 'individual',
  chosenSystem: 'ICRS', /*TODO change to object*/
  sexagesimalUnits: false,
  lat: new Latitude(),
  lon: new Longitude(),
  parallax: new Angle(),
  properMotionCross: new AngularVelocity(),
  properMotionDeclination: new AngularVelocity(),
  radialVelocity: Speed,
  radialVelocityReferenceFrame: 'bar',
  redshift: 0.00000,
  dopplerType: 'Radio'
};
