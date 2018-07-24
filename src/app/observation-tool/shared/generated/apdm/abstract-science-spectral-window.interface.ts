// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IExpectedSpectralLine} from './expected-spectral-line.interface';
import {IAdvancedWindowSetup} from './advanced-window-setup.interface';

export interface IAbstractScienceSpectralWindow {
  '@type': 'SpectralScanT' | 'ScienceSpectralWindowT';
  index: number;
  AdvancedWindowSetup: IAdvancedWindowSetup;
  ExpectedSpectralLine: IExpectedSpectralLine[];
}
