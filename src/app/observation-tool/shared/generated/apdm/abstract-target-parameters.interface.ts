// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {IVelocity} from './velocity.interface';
import {IExpectedProperties} from './expected-properties.interface';
import {IObsAttachmentRefT} from './apdm/entity-ref.interface';
import {IAngleT, IAngularVelocityT} from './test';

export interface IAbstractTargetParameters {
  '@type': 'TargetParametersT';
  sourceName: string;
  sourceCoordinates: ISkyCoordinates;
  pmRA: IAngularVelocityT;
  pmDec: IAngularVelocityT;
  parallax: IAngleT;
  nonSiderealMotion: boolean;
  sourceEphemeris: string;
  sourceVelocity: IVelocity;
  ephemerisFileName: string;
  index: number;
  sdReferencePosition: ISkyCoordinates[];
  ExpectedProperties: IExpectedProperties;
  ImageRef: IObsAttachmentRefT;
  solarSystemObject: string;
}
