import {
  ISquareLawSetupT
} from './square-law-setup.interface';
import {IAbstractInstrumentSpecT} from './abstract-instrument-spec.interface';
import {IACACorrelatorConfigurationT} from './aca-correlator-configuration.interface';
import {IBLCorrelatorConfigurationT} from './bl-correlator-configuration.interface';
import {IBeamSwitchingCycleT} from './beam-switching-cycle.interface';
import {IFrequencySwitchingCycleT} from './frequency-switching-cycle.interface';
import {IFrequencySetupT} from './frequency-setup.interface';

export interface ISpectralSpecT extends IAbstractInstrumentSpecT {
  ACACorrelatorConfiguration: IACACorrelatorConfigurationT;
  BLCorrelatorConfiguration: IBLCorrelatorConfigurationT;
  BeamSwitchingCycle: IBeamSwitchingCycleT;
  FrequencySwitchingCycle: IFrequencySwitchingCycleT;
  FrequencySetup: IFrequencySetupT;
  SquareLawSetup: ISquareLawSetupT;
  switchingType: string;
  receiverType: string;
}
