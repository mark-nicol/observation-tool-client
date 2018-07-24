// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IKeywordValue} from './keyword-value.interface';
import {IHolographyParameters} from './holography-parameters.interface';
import {IScienceParameters} from './science-parameters.interface';
import {IOpticalPointingParameters} from './optical-pointing-parameters.interface';
import {IRadiometricPointingParameters} from './radiometric-pointing-parameters.interface';
import {IReservationParameters} from './reservation-parameters.interface';
import {ICalibratorParameters} from './calibration-parameters.interface';

export interface IObservingParameters {
  '@type': 'HolographyParametersT' | 'ScienceParametersT' | 'OpticalPointingParametersT' | 'RadiometricPointingParametersT' | 'ReservationParametersT' | 'CalibratorParametersT';
  entityPartId: string;
  name: string;
  expertParameter: IKeywordValue[];
  almatype: string;
}

export type IObservingParametersUnion =
  IHolographyParameters
  | IScienceParameters
  | IOpticalPointingParameters
  | IRadiometricPointingParameters
  | IReservationParameters
  | ICalibratorParameters;
