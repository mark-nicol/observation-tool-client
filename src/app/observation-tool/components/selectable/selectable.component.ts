import {Component, Input} from '@angular/core';

/**
 * Wrapper component for the Bootstrap custom checkboxes and radio buttons
 *
 * Can be used for either by specifying radio or check in type
 */

@Component({
  selector: 'selectable',
  templateUrl: './selectable.component.html',
  styleUrls: ['./selectable.component.scss']
})

export class SelectableComponent {

  /** Extra classes to add to the component */
  @Input('class')
  classes: any;

  /** The type of input */
  @Input()
  type: any;

  /** The id of the input */
  @Input()
  id: any;

  /** The name of the input */
  @Input()
  name: any;

  /** Control whether the input is checked */
  @Input()
  checked: boolean;

}
