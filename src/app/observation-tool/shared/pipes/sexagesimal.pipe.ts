import {Pipe, PipeTransform} from '@angular/core';
import * as eq from 'equatorial';

@Pipe({
  name: 'sexagesimal'
})
export class SexagesimalPipe implements PipeTransform {

  transform(value: any): any {
    return eq.decDeg2Hms(value);
  }

}
