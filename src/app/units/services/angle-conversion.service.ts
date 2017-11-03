import {Injectable} from '@angular/core';
import {ValueConversionService} from './value-conversion.service';
import {ANGLE_DATA} from '../data/angle.data';

@Injectable()
export class AngleConversionService extends ValueConversionService {

  constructor() {
    super();
    this.loadData();
  }

  loadData(): void {
    this._data = ANGLE_DATA;
  }

}
