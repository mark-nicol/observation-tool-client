import {IFieldT} from './field.interface';
import {IAngleT, IUserAngleT} from './test';

export interface IEllipseT extends IFieldT {
  '@type': 'EllipseT';
  semiMajor: IAngleT;
  semiMinor: IAngleT;
  pAMajor: IAngleT;
  spacing: IUserAngleT;
}
