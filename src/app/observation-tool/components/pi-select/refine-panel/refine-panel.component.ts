import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * The refine panel component.
 * Allows user to refine PI search by category
 */

@Component({
  selector: 'app-refine-panel',
  templateUrl: './refine-panel.component.html',
  styleUrls: ['./refine-panel.component.css']
})
export class RefinePanelComponent {

  /** The name originally searched for */
  @Input() name;
  /** Emits chosen search parameters */
  @Output() refineSearch = new EventEmitter<string[]>();

  /**
   * Called when refine button is clicked, emits the search parameters
   * @param searchVariant The type of search to be made
   * @param searchString  The string to search for
   */
  refineClick(searchVariant: string, searchString: string) {
    this.refineSearch.emit([searchVariant, searchString]);
  }

}
