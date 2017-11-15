import {Injectable} from '@angular/core';
import {ANGLE_DATA} from '../data/angle.data';
import {ValueConversionService} from './value-conversion.service';

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
