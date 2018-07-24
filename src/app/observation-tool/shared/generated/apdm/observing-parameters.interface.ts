// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IKeywordValue} from './keyword-value.interface';

export interface IObservingParameters {
  '@type': 'HolographyParametersT' | 'ScienceParametersT' | 'OpticalPointingParametersT' | 'RadiometricPointingParametersT' | 'ReservationParametersT' | 'CalibratorParametersT';
  entityPartId: string;
  name: string;
  expertParameter: IKeywordValue[];
  almatype: string;
}
