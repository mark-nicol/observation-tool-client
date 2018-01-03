import {Angle} from '../../../../units/classes/angle';
import {AngularVelocity} from '../../../../units/classes/angular-velocity';
import {Latitude} from '../../../../units/classes/latitude';
import {Longitude} from '../../../../units/classes/longitude';
import {Speed} from '../../../../units/classes/speed';
import {AngleUnits} from '../../../../units/enums/angle-units.enum';
import {AngularVelocityUnits} from '../../../../units/enums/angular-velocity-units.enum';
import {SpeedUnits} from '../../../../units/enums/speed-units.enum';

export const FIELD_SOURCE_DATA = {
  sourceName: '',
  solarSystemObject: false,
  chosenSolarObject: null,
  targetType: 'individual',
  chosenSystem: 'ICRS', /*TODO change to object*/
  sexagesimalUnits: false,
  lat: new Latitude(),
  lon: new Longitude(),
  parallax: new Angle(AngleUnits.MAS),
  properMotionCross: new AngularVelocity(AngularVelocityUnits.MAS_YR),
  properMotionDeclination: new AngularVelocity(AngularVelocityUnits.MAS_YR),
  radialVelocity: new Speed(SpeedUnits.KM_S),
  radialVelocityReferenceFrame: 'bar',
  redshift: 0.00000,
  dopplerType: 'radio'
};
