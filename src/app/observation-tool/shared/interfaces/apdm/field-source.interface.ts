// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {IVelocity} from './velocity.interface';
import {IObsAttachmentRefT} from './apdm/entity-ref.interface';
import {
  IAngleT,
  IAngularVelocityT} from './test';
import {ICrossPattern} from './cross-pattern.interface';
import {IFillPattern} from './fill-pattern.interface';
import {IPointingPattern} from './pointing-pattern.interface';
import {IRectanglePattern} from './rectangle-pattern.interface';
import {IQuerySource} from './query-source.interface';
import {IReference} from './reference.interface';
import {ISourceProperty} from './source-property.interface';

export interface IFieldSource {
  entityPartId: string;
  sourceCoordinates: ISkyCoordinates;
  sourceName: string;
  sourceVelocity: IVelocity;
  sourceEphemeris: string;
  pMRA: IAngularVelocityT;
  pMDec: IAngularVelocityT;
  nonSiderealMotion: boolean;
  parallax: IAngleT;
  name: string;
  isQuery: boolean;
  ephemerisFileName: string;
  CrossPattern: ICrossPattern;
  FillPattern: IFillPattern;
  PointingPattern: IPointingPattern;
  RectanglePattern: IRectanglePattern;
  QuerySource: IQuerySource;
  Reference: IReference[];
  SourceProperty: ISourceProperty[];
  ImageRef: IObsAttachmentRefT;
  almatype: string;
  solarSystemObject: string;
}
