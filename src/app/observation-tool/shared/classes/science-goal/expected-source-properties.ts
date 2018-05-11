import {IExpectedProperties} from '../../interfaces/project/science-goal/target-parameters.interface';
import {Flux} from '../../../../units/classes/flux';
import {Frequency} from '../../../../units/classes/frequency';

export class ExpectedSourceProperties implements IExpectedProperties {
  prj_desiredCircularPolarizationPercentage: number;
  prj_desiredLineCircularPolarizationPercentage: number;
  prj_desiredLinePolarizationPercentage: number;
  prj_desiredPolarizationPercentage: number;
  prj_expectedImageDynamicRange: number;
  prj_expectedLineWidth: any;
  prj_expectedPeakFluxDensity: Flux;
  prj_expectedPeakLineFluxDensity: Flux;
  prj_expectedSpectralDynamicRange: number;
  prj_referenceFrequency: Frequency;
  solarActivityLevel: string;

  constructor() {

  }

}
