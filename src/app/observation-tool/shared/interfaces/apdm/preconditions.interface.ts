// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IWeatherConstraints} from './weather-constraints.interface';
import {UserAngle} from '../../../../units/classes/user-angle';

export interface IPreconditions {
  baselineCalValid: boolean;
  polarizationCalValid: boolean;
  minAllowedHA: UserAngle;
  maxAllowedHA: UserAngle;
  WeatherConstraints: IWeatherConstraints;
}
