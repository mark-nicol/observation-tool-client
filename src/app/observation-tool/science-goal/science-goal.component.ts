import {Component} from '@angular/core';
import {ScienceGoalInterface} from '../shared/interfaces/science-goal.interface';
import {PersistenceService} from '../shared/services/persistence.service';

/**
 * Science goal component which contains tabbed science goal pages
 */

@Component({
  selector: 'app-science-goal',
  templateUrl: './science-goal.component.html',
  styleUrls: ['./science-goal.component.scss']
})
export class ScienceGoalComponent {

  /** The currently selected goal page */
  selectedPage = 'general';

  /** Dict of all science goal page data */
  pages: { [id: string]: ScienceGoalInterface };

  /** Iterator for pages */
  pageKeys: (o) => string[] = Object.keys;

  /**
   * Constructor
   */
  constructor(private persistenceService: PersistenceService) {
    // this.persistenceService.getProject().subscribe(res => this.pages = res);
  }

}
