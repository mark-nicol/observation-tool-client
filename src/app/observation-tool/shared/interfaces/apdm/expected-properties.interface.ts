// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {Flux} from '../../../../units/classes/flux';
import {UserFrequency} from '../../../../units/classes/user-frequency';
import {Frequency} from '../../../../units/classes/frequency';

export interface IExpectedProperties {
  expectedPeakFluxDensity: Flux;
  desiredPolarizationPercentage: number;
  expectedLineWidth: UserFrequency;
  referenceFrequency: Frequency;
  expectedPeakLineFluxDensity: Flux;
  expectedSpectralDynamicRange: number;
  expectedImageDynamicRange: number;
  desiredLinePolarizationPercentage: number;
  desiredLineCircularPolarizationPercentage: number;
  desiredCircularPolarizationPercentage: number;
  solarActivityLevel: string;
}
