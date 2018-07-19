import {ISkyCoordinatesT} from './sky-coordinates.interface';
import {IVelocityT} from './velocity.interface';
import {IObsAttachmentRefT} from './apdm/entity-ref.interface';
import {
  IAngleT,
  IAngularVelocityT} from './test';
import {ICrossPatternT} from './cross-pattern.interface';
import {IFillPatternT} from './fill-pattern.interface';
import {IPointingPatternT} from './pointing-pattern.interface';
import {IRectanglePatternT} from './rectangle-pattern.interface';
import {IQuerySourceT} from './query-source.interface';
import {IReferenceT} from './reference.interface';
import {ISourcePropertyT} from './source-property.interface';

export interface IFieldSourceT {
  entityPartId: string;
  sourceCoordinates: ISkyCoordinatesT;
  sourceName: string;
  sourceVelocity: IVelocityT;
  sourceEphemeris: string;
  pMRA: IAngularVelocityT;
  pMDec: IAngularVelocityT;
  nonSiderealMotion: boolean;
  parallax: IAngleT;
  name: string;
  isQuery: boolean;
  ephemerisFileName: string;
  CrossPattern: ICrossPatternT;
  FillPattern: IFillPatternT;
  PointingPattern: IPointingPatternT;
  RectanglePattern: IRectanglePatternT;
  QuerySource: IQuerySourceT;
  Reference: IReferenceT[];
  SourceProperty: ISourcePropertyT[];
  ImageRef: IObsAttachmentRefT;
  almatype: string;
  solarSystemObject: string;
}
