// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IMagnitude} from './magnitude.interface';
import {IAngleT, IFluxT, IFrequencyT} from './test';

export interface ISourceProperty {
  sourceFrequency: IFrequencyT;
  sourceFluxI: IFluxT;
  sourceDiameter: IAngleT;
  sourceFluxQ: IFluxT;
  sourceFluxU: IFluxT;
  sourceFluxV: IFluxT;
  visibleMagnitude: IMagnitude;
  dateOfMeasurement: string;
}
