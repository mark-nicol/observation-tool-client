import {Injectable} from '@angular/core';
import {ANGULAR_VELOCITY_DATA} from '../data/angular-velocity.data';
import {ValueConversionService} from './value-conversion.service';

@Injectable()
export class AngularVelocityConversionService extends ValueConversionService {

  constructor() {
    super();
    this.loadData();
  }

  loadData(): void {
    this._data = ANGULAR_VELOCITY_DATA;
  }

}
