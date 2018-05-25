import {Frequency} from '../../../../units/classes/frequency';
import {UserFrequency} from '../../../../units/classes/user-frequency';
import {IAdvancedWindowSetup} from './advanced-window-setup.interface';

export interface ISpectralWindow {
  transitionName: string;
  centerFrequency: Frequency;
  bandWidth: UserFrequency;
  spectralResolution: UserFrequency;
  groupIndex: number;
  isSkyFrequency: boolean;
  splatalogId?: number | null;
  representativeWindow: boolean;
  groupResourceUse: string;
  index: number;
  advancedWindowSetup: IAdvancedWindowSetup;
}
