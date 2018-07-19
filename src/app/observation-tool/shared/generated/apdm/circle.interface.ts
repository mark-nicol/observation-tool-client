import {IFieldT} from './field.interface';
import {IAngleT, IUserAngleT} from './test';

export interface ICircleT extends IFieldT {
  '@type': 'CircleT';
  radius: IAngleT;
  spacing: IUserAngleT;
}
