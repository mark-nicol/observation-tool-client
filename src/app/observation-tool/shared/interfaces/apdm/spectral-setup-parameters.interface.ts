import {Frequency} from '../../../../units/classes/frequency';
import {ISpectralWindow} from './spectral-window.interface';

export interface ISpectralSetupParameters {
  representativeFrequency: Frequency;
  userRepresentativeFrequency: boolean;
  singleContinuumFrequency?: Frequency | null;
  spectralWindows?: (ISpectralWindow)[] | null;
  polarisation: string;
  type: string;
}
