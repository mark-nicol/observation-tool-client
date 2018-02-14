import {Frequency} from '../../../../units/classes/frequency';
import {
  IAdvancedSpectralSetup,
  IScienceSpectralWindow,
  ISpectralSetupParameters
} from '../../interfaces/project/science-goal/spectral-setup-parameters-interface';

export class SpectralSetupParameters implements ISpectralSetupParameters {

  polarisation: string;
  type: string;
  representativeFrequency: Frequency;
  userRepresentativeFrequency: boolean;
  singleContinuumFrequency: Frequency;
  AdvancedSpectralSetup: IAdvancedSpectralSetup;
  ScienceSpectralWindow: IScienceSpectralWindow[];


  constructor(polarisation?: string,
              type?: string,
              representativeFrequency?: Frequency,
              userRepresentativeFrequency?: boolean,
              singleContinuumFrequency?: Frequency,
              AdvancedSpectralSetup?: IAdvancedSpectralSetup,
              ScienceSpectralWindow?: IScienceSpectralWindow[]) {
    this.polarisation                = polarisation;
    this.type                        = type;
    this.representativeFrequency     = representativeFrequency;
    this.userRepresentativeFrequency = userRepresentativeFrequency;
    this.singleContinuumFrequency    = singleContinuumFrequency;
    this.AdvancedSpectralSetup       = AdvancedSpectralSetup;
    this.ScienceSpectralWindow       = ScienceSpectralWindow;
  }

}
