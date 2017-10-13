import {Injectable} from '@angular/core';
import {Longitude_DATA} from '../data/Longitude.data';
import {ValueConversionService} from './value-conversion.service';

@Injectable()
export class LongitudeConversionService extends ValueConversionService {

  constructor() {
    super();
    this.loadData();
  }

  loadData(): void {
    this._data = Longitude_DATA;
  }

}
