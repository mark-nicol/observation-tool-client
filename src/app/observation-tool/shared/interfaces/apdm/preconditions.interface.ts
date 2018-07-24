// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IUserAngleT} from './test';
import {IWeatherConstraints} from './weather-constraints.interface';

export interface IPreconditions {
  baselineCalValid: boolean;
  polarizationCalValid: boolean;
  minAllowedHA: IUserAngleT;
  maxAllowedHA: IUserAngleT;
  WeatherConstraints: IWeatherConstraints;
}
