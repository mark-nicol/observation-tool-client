import {
  IAdvancedSpectralSetup, IScienceSpectralWindow,
  ISpectralSetupParameters
} from '../../interfaces/project/science-goal/spectral-setup-parameters-interface';
import {Frequency} from '../../../../units/classes/frequency';

export class SpectralSetupParameters implements ISpectralSetupParameters {
  polarisation: string;
  AdvancedSpectralSetup: IAdvancedSpectralSetup;
  ScienceSpectralWindow: IScienceSpectralWindow[];
  representativeFrequency: Frequency;
  singleContinuumFrequency: Frequency;
  userRepresentativeFrequency: boolean;
  type: string;
}
