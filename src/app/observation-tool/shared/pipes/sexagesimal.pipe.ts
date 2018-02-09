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

  static trimHms(value: string): string {
    const hms = value.split(':');
    hms[2]    = (+hms[2]).toFixed(6);
    return hms.join(':');
  }

  /**
   * Transforms the content
   * @param value The content to transform
   * @param type
   */
  transform(value: any, type: string): any {
    if (value) {
      console.log(value, type);
      if (type === 'dec') {
        return SexagesimalPipe.trimHms(eq.decDeg2Hms(value));
      } else if (type === 'ra') {
        return SexagesimalPipe.trimHms(eq.raDeg2Hms(value));
      }
    }
  }


}
