import {Page} from '../interfaces/page';
import {ScienceGoalPanelService} from '../services/science-goal-panel.service';

/**
 * Abstract class defining science goal pages
 *
 * Handles ID setting, data loading, and hiding and showing panels
 */

export abstract class ScienceGoalPage {

  /** Unique id of the page */
  id: string;

  /** Page data */
  page: Page;

  /**
   * Sets the id and loads page data
   * @param scienceGoalPanelService Injected service
   * @param id                      Id for the page
   */
  constructor(private scienceGoalPanelService: ScienceGoalPanelService, id: string) {
    this.id = id;
    this.scienceGoalPanelService.getPage(this.id).subscribe(data => this.page = data);
  }

  /**
   * Handles closing or opening of panels
   * @param panel The id of the panel to change state
   */
  hiddenChange(panel: string) {
    this.scienceGoalPanelService.hiddenChange(this.id, panel);
  }

}
