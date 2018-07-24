// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAngleT, ISensitivityT, ITemperatureT} from '../test';
import {IVelocityT} from '../velocity.interface';

export interface IDataProcessingParameters {
  angularResolution: IAngleT;
  velocityResolution: IVelocityT;
  tBSensitivityGoal: ITemperatureT;
  rMSGoal: ISensitivityT;
  projectType: string;
}
