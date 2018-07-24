// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {
  ISquareLawSetup
} from './square-law-setup.interface';
import {IAbstractInstrumentSpec} from './abstract-instrument-spec.interface';
import {IACACorrelatorConfiguration} from './aca-correlator-configuration.interface';
import {IBLCorrelatorConfiguration} from './bl-correlator-configuration.interface';
import {IBeamSwitchingCycle} from './beam-switching-cycle.interface';
import {IFrequencySwitchingCycle} from './frequency-switching-cycle.interface';
import {IFrequencySetup} from './frequency-setup.interface';

export interface ISpectralSpec extends IAbstractInstrumentSpec {
  ACACorrelatorConfiguration: IACACorrelatorConfiguration;
  BLCorrelatorConfiguration: IBLCorrelatorConfiguration;
  BeamSwitchingCycle: IBeamSwitchingCycle;
  FrequencySwitchingCycle: IFrequencySwitchingCycle;
  FrequencySetup: IFrequencySetup;
  SquareLawSetup: ISquareLawSetup;
  switchingType: string;
  receiverType: string;
}
