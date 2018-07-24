// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IFrequencyT} from './test';

export interface IBaseBandSpecification {
  entityPartId: string;
  centerFrequency: IFrequencyT;
  frequencySwitching: boolean;
  lO2Frequency: IFrequencyT;
  weighting: number;
  useUSB: boolean;
  use12GHzFilter: boolean;
  imageCenterFrequency: IFrequencyT;
  imageWeighting: number;
  almatype: string;
  baseBandName: string;
  sideBandPreference: string;
}
