import {Injectable} from '@angular/core';
import {SENSITIVITY_DATA} from '../data/sensitivity.data';
import {ValueConversionService} from './value-conversion.service';

@Injectable()
export class FluxConversionService extends ValueConversionService {
  constructor() {
    super();
    this.loadData();
  }

  loadData(): void {
    this._data = SENSITIVITY_DATA;
  }
}
