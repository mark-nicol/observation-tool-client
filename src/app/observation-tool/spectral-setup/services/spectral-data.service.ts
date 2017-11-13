import {Injectable} from '@angular/core';
import {WV_01} from '../data/wv01';

@Injectable()
export class SpectralDataService {

  constructor() {
    console.log(WV_01);
  }

  getData() {
    return WV_01;
  }

}
