import {IFluxT, IFrequencyT} from './test';

export interface ICalibrationTargetPropertiesT {
  frequency: IFrequencyT;
  flux: IFluxT;
  dateOfMeasurement: string;
}
