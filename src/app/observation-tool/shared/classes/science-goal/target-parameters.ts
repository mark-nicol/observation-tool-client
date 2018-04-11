import {
  IExpectedProperties,
  ISinglePoint,
  ISkyCoordinates,
  ISourceVelocity,
  ITargetParameters
} from '../../interfaces/project/science-goal/target-parameters.interface';
import {AngularVelocity} from '../../../../units/classes/angular-velocity';
import {Angle} from '../../../../units/classes/angle';

export class TargetParameters implements ITargetParameters {
  prj_ExpectedProperties: IExpectedProperties;
  prj_SinglePoint: ISinglePoint[];
  prj_index: number;
  prj_isMosaic: boolean;
  prj_nonSiderealMotion: boolean;
  prj_parallax: Angle;
  prj_pmDec: AngularVelocity;
  prj_pmRA: AngularVelocity;
  prj_sourceCoordinates: ISkyCoordinates;
  prj_sourceEphemeris: string;
  prj_sourceName: string;
  prj_sourceVelocity: ISourceVelocity;
  solarSystemObject: any;
  type: string;
}
