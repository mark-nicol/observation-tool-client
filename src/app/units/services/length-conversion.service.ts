import {Injectable} from '@angular/core';
import {LENGTH_DATA} from '../data/length.data';
import {ValueConversionService} from './value-conversion.service';

@Injectable()
export class LengthConversionService extends ValueConversionService {

  constructor() {
    super();
    this.loadData();
  }

  loadData(): void {
    this._data = LENGTH_DATA;
  }

}
