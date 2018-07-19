import {IUserAngleT} from './test';
import {IWeatherConstraintsT} from './weather-constraints.interface';

export interface IPreconditionsT {
  baselineCalValid: boolean;
  polarizationCalValid: boolean;
  minAllowedHA: IUserAngleT;
  maxAllowedHA: IUserAngleT;
  WeatherConstraints: IWeatherConstraintsT;
}
