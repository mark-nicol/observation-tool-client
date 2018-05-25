import {Speed} from '../../../../units/classes/speed';

export interface IVelocity {
  centerVelocity: Speed;
  referenceSystem: string;
  dopplerCalcType: string;
}
