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

  /** Emits chosen search parameters */
  @Output() refineSearch = new EventEmitter<string[]>();

  searchType = 'Name';
  @Input('name')
  searchString: string;

  /**
   * Called when refine button is clicked, emits the search parameters
   */
  refineClick() {
    this.refineSearch.emit([this.searchType, this.searchString]);
  }

}
