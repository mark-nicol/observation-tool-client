import {Pipe, PipeTransform} from '@angular/core';
import * as eq from 'equatorial';

/**
 * Pipe to convert values to degrees
 *
 * Currently sets content to 8 decimal places
 */

@Pipe({
        name: 'degrees'
      })
export class DegreesPipe implements PipeTransform {

  /**
   * Transforms the content
   * @param value The content to transform
   * @param type
   */
  transform(value: any, type: string): any {
    if (value) {
      if (type === 'dec') {
        return eq.decHms2Deg(value);
      } else if (type === 'ra') {
        return eq.raHms2Deg(value);
      }
    }
  }

}
