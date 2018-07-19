import {IAbstractScienceGoalT} from './abstract-science-goal.interface';
import {
  ITimeT
} from '../test';
import {ICalibrationSetupParametersT} from './calibration-setup-parameters.interface';
import {IObservatoryGoalControlParametersT} from './observatory-goal-control-parameters.interface';
import {IObservatoryGoalTargetParametersT} from './observatory-goal-target-parameters.interface';
import {ISpectralSetupParametersT} from './spectral-setup-parameters.interface';

export interface IObservatoryGoalT extends IAbstractScienceGoalT {
  '@type': 'ObservatoryGoalT';
  purpose: string;
  integrationTime: ITimeT;
  useQuery: boolean;
  CalibrationSetupParameters: ICalibrationSetupParametersT;
  observatoryGoalControlParameters: IObservatoryGoalControlParametersT;
  observatoryGoalTargetParameters: IObservatoryGoalTargetParametersT[];
  SpectralSetupParameters: ISpectralSetupParametersT;
}
