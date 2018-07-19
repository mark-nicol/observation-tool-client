import {IAdvancedWindowSetupT, IExpectedSpectralLineT} from './test';

export interface IAbstractScienceSpectralWindowT {
  '@type': 'SpectralScanT' | 'ScienceSpectralWindowT';
  index: number;
  AdvancedWindowSetup: IAdvancedWindowSetupT;
  ExpectedSpectralLine: IExpectedSpectralLineT[];
}
