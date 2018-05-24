import {ReflectiveInjector} from '@angular/core';
import {ValueUnitPair} from './value-unit-pair';
import {StorageVolumeUnits} from '../enums/storage-volume-units.enum';
import {StorageVolumeConversionService} from '../services/storage-volume-conversion.service';

/**
 * ValueUnitPair for speed units
 */

export class StorageVolume extends ValueUnitPair {

  /**
   * Calls super constructor, injects correct conversion service
   * @param unit  The units which the content is stored in
   * @param value The content of the pair
   */
  constructor(unit = StorageVolumeUnits.MB, value = 0.0) {
    super(unit, value, StorageVolumeUnits.MB);
    const injector               = ReflectiveInjector.resolveAndCreate([StorageVolumeConversionService]);
    this._valueConversionService = injector.get(StorageVolumeConversionService);
  }
}
