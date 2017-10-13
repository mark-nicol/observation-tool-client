import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexagesimal'
})
export class SexagesimalPipe implements PipeTransform {

  transform(value: any): any {
    let valueLength = value.toString().length;
    if (valueLength < 10) {
      for (let i = 0; i < (10 - valueLength); i++) {
        value += '0';
      }
      return value.substring(0,2) + ':' + value.substring(2, 4) + ':' + value.substring(4, 6) + '.' + value.substring(6);
    } else { return value; }

  }

}
