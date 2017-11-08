import {Injectable} from '@angular/core';
import {LONGITUDE_DATA} from '../data/longitude.data';
import {ValueConversionService} from './value-conversion.service';

@Injectable()
export class LongitudeConversionService extends ValueConversionService {

  constructor() {
    super();
    this.loadData();
  }

  loadData(): void {
    this._data = LONGITUDE_DATA;
  }

}
