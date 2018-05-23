import {
  ISinglePoint,
  ISkyCoordinates,
  ISourceVelocity,
  ITargetParameters
} from '../../interfaces/project/science-goal/target-parameters.interface';
import {AngularVelocity} from '../../../../units/classes/angular-velocity';
import {Angle} from '../../../../units/classes/angle';
import {ExpectedSourceProperties} from './target-parameters/expected-source-properties';
import {SkyCoordinates} from './target-parameters/sky-coordinates';
import {SourceVelocity} from './target-parameters/source-velocity';


export class TargetParameters implements ITargetParameters {
  ExpectedProperties: ExpectedSourceProperties;
  SinglePoint: ISinglePoint[];
  index: number;
  isMosaic: boolean;
  nonSiderealMotion: boolean;
  parallax: Angle;
  pmDec: AngularVelocity;
  pmRA: AngularVelocity;
  sourceCoordinates: SkyCoordinates;
  sourceEphemeris: string;
  sourceName: string;
  sourceVelocity: SourceVelocity;
  solarSystemObject: any;
  type: string;


  constructor() {
    this.sourceName = 'New Target';
    this.ExpectedProperties = new ExpectedSourceProperties();
    this.sourceCoordinates = new SkyCoordinates();
    this.sourceVelocity = new SourceVelocity();
  }
}
