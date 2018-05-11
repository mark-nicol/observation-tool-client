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
  prj_ExpectedProperties: ExpectedSourceProperties;
  prj_SinglePoint: ISinglePoint[];
  prj_index: number;
  prj_isMosaic: boolean;
  prj_nonSiderealMotion: boolean;
  prj_parallax: Angle;
  prj_pmDec: AngularVelocity;
  prj_pmRA: AngularVelocity;
  prj_sourceCoordinates: SkyCoordinates;
  prj_sourceEphemeris: string;
  prj_sourceName: string;
  prj_sourceVelocity: SourceVelocity;
  solarSystemObject: any;
  type: string;


  constructor() {
    this.prj_sourceName = 'New Target';
    this.prj_ExpectedProperties = new ExpectedSourceProperties();
    this.prj_sourceCoordinates = new SkyCoordinates();
    this.prj_sourceVelocity = new SourceVelocity();
  }
}
