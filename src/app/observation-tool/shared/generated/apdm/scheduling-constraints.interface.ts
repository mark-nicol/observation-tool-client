import {ISkyCoordinatesT} from './sky-coordinates.interface';
import {ISchedBlockRefT} from './apdm/entity-ref.interface';
import {IAngleT, IFrequencyT} from './test';

export interface ISchedulingConstraintsT {
  representativeFrequency: IFrequencyT;
  minAcceptableAngResolution: IAngleT;
  maxAcceptableAngResolution: IAngleT;
  dynamicRange: number;
  representativeCoordinates: ISkyCoordinatesT;
  requiredReceiverBands: string[];
  nominalConfiguration: string[];
  scienceGoalDesiredResolution: IAngleT;
  scienceGoalLargestAngularScale: IAngleT;
  isSimultaneous: boolean;
  simultaneousSbUid: string[];
  representativeTargetRef: ISchedBlockRefT;
  representativeReceiverBand: string;
}
