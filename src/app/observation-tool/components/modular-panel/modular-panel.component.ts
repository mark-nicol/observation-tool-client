import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Creates a modular panel wrapper around content
 */

@Component({
  selector: 'modular-panel',
  templateUrl: './modular-panel.component.html',
  styleUrls: ['./modular-panel.component.css']
})
export class ModularPanelComponent {

  /** Unique id of the panel, used for closing and opening */
  @Input() id: string;

  /** Title string to show on the panel */
  @Input() title: string;

  /** Path to an image to display if required */
  @Input() image: string;

  /** Used to control the minimizing and maximizing the panel */
  isCollapsed = false;

  /** Emits the id of the panel when the close button is pressed */
  @Output() hiddenChange = new EventEmitter<string>();

  /** Called when the close button is clicked, emits a signal to the parent component */
  removeClick() {
    console.log('Remove click', this.id);
    this.hiddenChange.emit(this.id);
  }

}
