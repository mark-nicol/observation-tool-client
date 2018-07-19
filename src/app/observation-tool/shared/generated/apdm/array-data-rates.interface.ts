import {IDataRateT, IStorageVolumeT} from '../test';

export interface IArrayDataRatesT {
  estimatedAverageDataRate: IDataRateT;
  estimatedMaximumDataRate: IDataRateT;
  estimatedDataVolume: IStorageVolumeT;
  arrayName: string;
}
