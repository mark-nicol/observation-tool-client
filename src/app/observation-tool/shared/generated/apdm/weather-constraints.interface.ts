import {IAngleT, ILengthT, ISpeedT} from './test';

export interface IWeatherConstraintsT {
  maxPWVC: ILengthT;
  seeing: IAngleT;
  phaseStability: IAngleT;
  maxWindVelocity: ISpeedT;
}
