import {Angle} from '../../../../units/classes/angle';
import {AngularVelocity} from '../../../../units/classes/angular-velocity';
import {
  IExpectedProperties,
  IRectangle,
  ISinglePoint,
  ISourceVelocity,
  ITargetParameters
} from '../../interfaces/project/science-goal/target-parameters.interface';

export class TargetParameters implements ITargetParameters {
  type: string; // TODO Enum
  isMosaic: boolean;
  sourceName: string;
  sourceCoordinates: any;
  pmRA: AngularVelocity;
  pmDec: AngularVelocity;
  parallax: Angle;
  nonSiderealMotion: boolean;
  solarSystemObject: any; // TODO Change to real representation
  sourceEphemeris: string;
  sourceVelocity: ISourceVelocity;
  ephemerisFileName: string;
  index: number;
  sdReferencePosition: any;
  ExpectedProperties: IExpectedProperties;
  SinglePoint?: ISinglePoint[];
  Rectangle?: IRectangle;
}
