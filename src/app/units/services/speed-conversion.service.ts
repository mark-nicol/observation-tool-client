import {Injectable} from '@angular/core';
import {SPEED_DATA} from '../data/speed.data';
import {ValueConversionService} from './value-conversion.service';

@Injectable()
export class SpeedConversionService extends ValueConversionService {

  constructor() {
    super();
    this.loadData();
  }

  loadData(): void {
    this._data = SPEED_DATA;
  }

}
