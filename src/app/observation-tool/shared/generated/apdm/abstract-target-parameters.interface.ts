import {ISkyCoordinatesT} from './sky-coordinates.interface';
import {IVelocityT} from './velocity.interface';
import {IExpectedPropertiesT} from './expected-properties.interface';
import {IObsAttachmentRefT} from './apdm/entity-ref.interface';
import {IAngleT, IAngularVelocityT} from './test';

export interface IAbstractTargetParametersT {
  '@type': 'TargetParametersT';
  sourceName: string;
  sourceCoordinates: ISkyCoordinatesT;
  pmRA: IAngularVelocityT;
  pmDec: IAngularVelocityT;
  parallax: IAngleT;
  nonSiderealMotion: boolean;
  sourceEphemeris: string;
  sourceVelocity: IVelocityT;
  ephemerisFileName: string;
  index: number;
  sdReferencePosition: ISkyCoordinatesT[];
  ExpectedProperties: IExpectedPropertiesT;
  ImageRef: IObsAttachmentRefT;
  solarSystemObject: string;
}
