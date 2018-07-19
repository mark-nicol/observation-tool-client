import {IFluxT, IFrequencyT, IUserFrequencyT} from './test';

export interface IExpectedPropertiesT {
  expectedPeakFluxDensity: IFluxT;
  desiredPolarizationPercentage: number;
  expectedLineWidth: IUserFrequencyT;
  referenceFrequency: IFrequencyT;
  expectedPeakLineFluxDensity: IFluxT;
  expectedSpectralDynamicRange: number;
  expectedImageDynamicRange: number;
  desiredLinePolarizationPercentage: number;
  desiredLineCircularPolarizationPercentage: number;
  desiredCircularPolarizationPercentage: number;
  solarActivityLevel: string;
}
