import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexagesimal'
})
export class SexagesimalPipe implements PipeTransform {

  transform(value: any): any {
    console.log('Piping sexagesimal', value);
    return value+':';
  }

}
