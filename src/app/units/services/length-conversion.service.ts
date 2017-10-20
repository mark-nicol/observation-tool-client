import {Injectable} from '@angular/core';
import {ValueConversionService} from './value-conversion.service';
import {LENGTH_DATA} from '../data/length.data';

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
