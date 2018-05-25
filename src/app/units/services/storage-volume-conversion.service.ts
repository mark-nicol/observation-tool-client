import {Injectable} from '@angular/core';
import {ValueConversionService} from './value-conversion.service';
import {STORAGE_VOLUME_DATA} from '../data/storage-volume.data';

/**
 * Service to supply unit data of this type
 */

@Injectable()
export class StorageVolumeConversionService extends ValueConversionService {

  /**
   * Constructor, calls super and loads data for this service type
   */
  constructor() {
    super();
    this.loadData();
  }

  /**
   * Loads the data specific to this type from a constant
   */
  loadData(): void {
    this._data = STORAGE_VOLUME_DATA;
  }

}
