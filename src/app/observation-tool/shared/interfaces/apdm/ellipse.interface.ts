// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IField} from './field.interface';
import {IAngleT, IUserAngleT} from './test';

export interface IEllipse extends IField {
  '@type': 'EllipseT';
  semiMajor: IAngleT;
  semiMinor: IAngleT;
  pAMajor: IAngleT;
  spacing: IUserAngleT;
}
