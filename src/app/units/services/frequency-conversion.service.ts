import {Injectable} from '@angular/core';
import {FREQUENCY_DATA} from '../data/frequency.data';
import {ValueConversionService} from './value-conversion.service';

@Injectable()
export class FrequencyConversionService extends ValueConversionService {

  constructor() {
    super();
    this.loadData();
  }

  loadData(): void {
    this._data = FREQUENCY_DATA;
  }

}
