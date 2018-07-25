// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {Frequency} from '../../../../units/classes/frequency';

export interface IBaseBandSpecification {
  entityPartId: string;
  centerFrequency: Frequency;
  frequencySwitching: boolean;
  lO2Frequency: Frequency;
  weighting: number;
  useUSB: boolean;
  use12GHzFilter: boolean;
  imageCenterFrequency: Frequency;
  imageWeighting: number;
  almatype: string;
  baseBandName: string;
  sideBandPreference: string;
}
