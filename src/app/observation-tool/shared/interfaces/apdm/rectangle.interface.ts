import {IField} from './field.interface';
import {Angle} from '../../../../units/classes/angle';
import {UserAngle} from '../../../../units/classes/user-angle';
import {Frequency} from '../../../../units/classes/frequency';

export interface IRectangle extends IField {
  paLong: Angle;
  _long: Angle;
  _short: Angle;
  spacing: UserAngle;
  referenceFrequency: Frequency;
}
