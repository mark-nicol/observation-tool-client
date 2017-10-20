import {Injectable} from '@angular/core';
import {ValueConversionService} from './value-conversion.service';
import {FREQUENCY_DATA} from '../data/frequency.data';

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
