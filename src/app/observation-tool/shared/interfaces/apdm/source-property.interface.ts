// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IMagnitude} from './magnitude.interface';
import {Flux} from '../../../../units/classes/flux';
import {Frequency} from '../../../../units/classes/frequency';
import {Angle} from '../../../../units/classes/angle';

export interface ISourceProperty {
  sourceFrequency: Frequency;
  sourceFluxI: Flux;
  sourceDiameter: Angle;
  sourceFluxQ: Flux;
  sourceFluxU: Flux;
  sourceFluxV: Flux;
  visibleMagnitude: IMagnitude;
  dateOfMeasurement: string;
}
