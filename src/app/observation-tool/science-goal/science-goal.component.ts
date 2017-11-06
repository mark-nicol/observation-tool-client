import {Component, OnInit} from '@angular/core';
import {ScienceGoalPage} from '../shared/interfaces/science-goal-page.interface';
import {ScienceGoalPageService} from '../../services/science-goal-page.service';

/**
 * Science goal component which contains tabbed science goal pages
 */

@Component({
  selector: 'app-science-goal',
  templateUrl: './science-goal.component.html',
  styleUrls: ['./science-goal.component.scss']
})
export class ScienceGoalComponent implements OnInit {

  /** The currently selected goal page */
  selectedPage = 'general';

  /** Dict of all science goal page data */
  pages: { [id: string]: ScienceGoalPage };

  /** Iterator for pages */
  pageKeys: (o) => string[] = Object.keys;

  /**
   * Constructor
   * @param scienceGoalPanelService Injected service
   */
  constructor(private scienceGoalPanelService: ScienceGoalPageService) {
  }

  /**
   * Collects page data from the service
   */
  ngOnInit() {
    this.scienceGoalPanelService.pages.subscribe(data => this.pages = data);
  }

  /**
   * Handles a change of a panel's hidden state
   * @param panel The panel to change state on
   */
  hiddenChange(panel: string) {
    this.scienceGoalPanelService.hiddenChange(this.selectedPage, panel);
  }

}
