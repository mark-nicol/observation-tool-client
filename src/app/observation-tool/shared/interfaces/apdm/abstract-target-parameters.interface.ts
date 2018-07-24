// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {IVelocity} from './velocity.interface';
import {IExpectedProperties} from './expected-properties.interface';
import {ITargetParameters} from './target-parameters.interface';
import {IObsAttachmentRef} from './entity-ref.interface';
import {AngularVelocity} from '../../../../units/classes/angular-velocity';
import {Angle} from '../../../../units/classes/angle';

export interface IAbstractTargetParameters {
  '@type': 'TargetParametersT';
  sourceName: string;
  sourceCoordinates: ISkyCoordinates;
  pmRA: AngularVelocity;
  pmDec: AngularVelocity;
  parallax: Angle;
  nonSiderealMotion: boolean;
  sourceEphemeris: string;
  sourceVelocity: IVelocity;
  ephemerisFileName: string;
  index: number;
  sdReferencePosition: ISkyCoordinates[];
  ExpectedProperties: IExpectedProperties;
  ImageRef: IObsAttachmentRef;
  solarSystemObject: string;
}

export type IAbstractTargetParametersUnion = ITargetParameters;
