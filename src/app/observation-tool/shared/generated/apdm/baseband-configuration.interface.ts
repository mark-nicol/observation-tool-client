import {IFrequencyT} from './test';

export interface IBaseBandSpecificationT {
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
