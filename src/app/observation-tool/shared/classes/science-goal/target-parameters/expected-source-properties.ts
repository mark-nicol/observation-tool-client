import {IExpectedProperties} from '../../../interfaces/project/science-goal/target-parameters.interface';
import {Flux} from '../../../../../units/classes/flux';
import {Frequency} from '../../../../../units/classes/frequency';

export class ExpectedSourceProperties implements IExpectedProperties {
  desiredCircularPolarizationPercentage: number;
  desiredLineCircularPolarizationPercentage: number;
  desiredLinePolarizationPercentage: number;
  desiredPolarizationPercentage: number;
  expectedImageDynamicRange: number;
  expectedLineWidth: any;
  expectedPeakFluxDensity: Flux;
  expectedPeakLineFluxDensity: Flux;
  expectedSpectralDynamicRange: number;
  referenceFrequency: Frequency;
  solarActivityLevel: string;

  constructor() {

  }

}
