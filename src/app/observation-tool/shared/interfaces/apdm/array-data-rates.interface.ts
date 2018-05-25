import {DataRate} from '../../../../units/classes/data-rate';
import {StorageVolume} from '../../../../units/classes/storage-volume';

export interface IArrayDataRates {
  estimatedAverageDataRate: DataRate;
  estimatedMaximumDataRate: DataRate;
  estimatedDataVolume: StorageVolume;
  arrayName: string;
}
