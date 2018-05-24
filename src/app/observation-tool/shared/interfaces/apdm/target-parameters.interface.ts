import {AngularVelocity} from '../../../../units/classes/angular-velocity';
import {Angle} from '../../../../units/classes/angle';
import {IVelocity} from './velocity.interface';
import {IExpectedProperties} from './expected-properties.interface';
import {IField} from './field.interface';
import {ISkyCoordinates} from './sky-coordinates.interface';

export interface ITargetParameters {
  isMosaic: boolean;
  circleOrEllipseOrPolygon?: (IField)[] | null;
  type: string;
  sourceName: string;
  sourceCoordinates: ISkyCoordinates;
  pmRA: AngularVelocity;
  pmDec: AngularVelocity;
  parallax: Angle;
  nonSiderealMotion: boolean;
  sourceEphemeris: string;
  sourceVelocity: IVelocity;
  index: number;
  expectedProperties: IExpectedProperties;
  solarSystemObject: string;
}
