import { Injectable } from '@angular/core';
import {ValueConversionService} from './value-conversion.service';
import {SPEED_DATA} from '../data/speed.data';

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
