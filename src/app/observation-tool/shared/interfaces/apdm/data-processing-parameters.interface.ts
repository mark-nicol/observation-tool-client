// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {Angle} from '../../../../units/classes/angle';
import {Temperature} from '../../../../units/classes/temperature';
import {Sensitivity} from '../../../../units/classes/sensitivity';
import {IVelocity} from './velocity.interface';

export interface IDataProcessingParameters {
  angularResolution: Angle;
  velocityResolution: IVelocity;
  tBSensitivityGoal: Temperature;
  rMSGoal: Sensitivity;
  projectType: string;
}
