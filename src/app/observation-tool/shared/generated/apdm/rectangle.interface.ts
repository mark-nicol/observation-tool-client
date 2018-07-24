// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IField} from './field.interface';
import {IAngleT, IFrequencyT, IUserAngleT} from './test';

export interface IRectangle extends IField {
  '@type': 'RectangleT';
  pALong: IAngleT;
  long: IAngleT;
  short: IAngleT;
  spacing: IUserAngleT;
  referenceFrequency: IFrequencyT;
}
