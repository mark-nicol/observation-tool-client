// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IField} from './field.interface';
import {Angle} from '../../../../units/classes/angle';
import {UserAngle} from '../../../../units/classes/user-angle';

export interface ICircle extends IField {
  '@type': 'CircleT';
  radius: Angle;
  spacing: UserAngle;
}
