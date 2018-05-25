import {Angle} from '../../../../units/classes/angle';
import {Temperature} from '../../../../units/classes/temperature';
import {Sensitivity} from '../../../../units/classes/sensitivity';
import {IVelocity} from './velocity.interface';

export interface IDataProcessingParameters {
  angularResolution: Angle;
  velocityResolution: IVelocity;
  tbSensitivityGoal: Temperature;
  rmsGoal: Sensitivity;
  projectType: string;
}
