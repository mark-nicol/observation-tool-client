import {IAngleT, ISensitivityT, ITemperatureT} from '../test';
import {IVelocityT} from '../velocity.interface';

export interface IDataProcessingParametersT {
  angularResolution: IAngleT;
  velocityResolution: IVelocityT;
  tBSensitivityGoal: ITemperatureT;
  rMSGoal: ISensitivityT;
  projectType: string;
}
