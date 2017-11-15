import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to convert values to degrees
 *
 * Currently sets value to 8 decimal places
 */

@Pipe({
  name: 'degrees'
})
export class DegreesPipe implements PipeTransform {

  /**
   * Transforms the value
   * @param value The value to transform
   */
  transform(value: any): any {
    if (value) {
      return parseFloat(value).toFixed(8);
    }
  }

}
