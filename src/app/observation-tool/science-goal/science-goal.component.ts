import {Component} from '@angular/core';
import {ScienceGoalPageInterface} from '../shared/interfaces/science-goal-page.interface';
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
  pages: { [id: string]: ScienceGoalPageInterface };

  /** Iterator for pages */
  pageKeys: (o) => string[] = Object.keys;

  /**
   * Constructor
   */
  constructor(private persistenceService: PersistenceService) {
    this.persistenceService.getPages().subscribe(res => this.pages = res);
  }

}
