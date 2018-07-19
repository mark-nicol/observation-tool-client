import {IExpectedSpectralLineT} from './expected-spectral-line.interface';
import {IAdvancedWindowSetupT} from './advanced-window-setup.interface';

export interface IAbstractScienceSpectralWindowT {
  '@type': 'SpectralScanT' | 'ScienceSpectralWindowT';
  index: number;
  AdvancedWindowSetup: IAdvancedWindowSetupT;
  ExpectedSpectralLine: IExpectedSpectralLineT[];
}
