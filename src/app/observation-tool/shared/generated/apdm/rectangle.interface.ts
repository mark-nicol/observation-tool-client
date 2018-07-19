import {IFieldT} from './field.interface';
import {IAngleT, IFrequencyT, IUserAngleT} from './test';

export interface IRectangleT extends IFieldT {
  '@type': 'RectangleT';
  pALong: IAngleT;
  long: IAngleT;
  short: IAngleT;
  spacing: IUserAngleT;
  referenceFrequency: IFrequencyT;
}
