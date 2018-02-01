import {Component} from '@angular/core';

/**
 * Type component
 *
 * Currently inactive
 */

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent {

  spectralTypeRadioChoice = 'line';
  polarizationRadioChoice = 'xx';

}
