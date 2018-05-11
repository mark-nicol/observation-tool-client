import {ISourceVelocity} from '../../../interfaces/project/science-goal/target-parameters.interface';
import {Speed} from '../../../../../units/classes/speed';

export class SourceVelocity implements ISourceVelocity {
  dopplerCalcType: string;
  referenceSystem: string;
  val_centerVelocity: Speed;

  constructor() {

  }
}
