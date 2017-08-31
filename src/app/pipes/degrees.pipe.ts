import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degrees'
})
export class DegreesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('Piping degrees', parseFloat(value).toFixed(4));
    if (value) {
      return parseFloat(value).toFixed(8);
    }
  }

}
