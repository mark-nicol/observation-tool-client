import {
  IAdvancedSpectralSetup, IScienceSpectralWindow,
  ISpectralSetupParameters
} from '../../interfaces/project/science-goal/spectral-setup-parameters-interface';
import {Frequency} from '../../../../units/classes/frequency';

export class SpectralSetupParameters implements ISpectralSetupParameters {
  polarisation: string;
  prj_AdvancedSpectralSetup: IAdvancedSpectralSetup;
  prj_ScienceSpectralWindow: IScienceSpectralWindow[];
  prj_representativeFrequency: Frequency;
  prj_singleContinuumFrequency: Frequency;
  prj_userRepresentativeFrequency: boolean;
  type: string;
}
