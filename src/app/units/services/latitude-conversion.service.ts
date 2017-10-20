import {Injectable} from '@angular/core';
import {LATITUDE_DATA} from '../data/latitude.data';
import {ValueConversionService} from './value-conversion.service';

@Injectable()
export class LatitudeConversionService extends ValueConversionService {

  constructor() {
    super();
    this.loadData();
  }

  loadData(): void {
    this._data = LATITUDE_DATA;
  }

}
