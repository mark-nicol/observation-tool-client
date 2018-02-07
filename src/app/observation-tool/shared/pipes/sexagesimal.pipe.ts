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
   * @param type
   */
  transform(value: any, type: string): any {
    if (value) {
      if (type === 'dec') {
        return eq.decDeg2Hms(value);
      } else if (type === 'ra') {
        return eq.raDeg2Hms(value);
      }
    }
  }

}
