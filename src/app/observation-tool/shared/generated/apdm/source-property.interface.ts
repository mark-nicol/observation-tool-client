import {IMagnitudeT} from './magnitude.interface';
import {IAngleT, IFluxT, IFrequencyT} from './test';

export interface ISourcePropertyT {
  sourceFrequency: IFrequencyT;
  sourceFluxI: IFluxT;
  sourceDiameter: IAngleT;
  sourceFluxQ: IFluxT;
  sourceFluxU: IFluxT;
  sourceFluxV: IFluxT;
  visibleMagnitude: IMagnitudeT;
  dateOfMeasurement: string;
}
