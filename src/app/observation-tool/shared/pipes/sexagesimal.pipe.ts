import {Pipe, PipeTransform} from '@angular/core';
import * as eq from 'equatorial';

/**
 * Pipe to convert degrees to sexagesimal
 *
 * Uses equatorial library
 */

@Pipe({
  name: 'sexagesimal'
})
export class SexagesimalPipe implements PipeTransform {

  /**
   * Transforms the content
   * @param value The content to transform
   */
  transform(value: any): any {
    return eq.decDeg2Hms(value);
  }

}
