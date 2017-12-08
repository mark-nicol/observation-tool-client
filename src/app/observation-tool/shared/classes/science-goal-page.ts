import {PersistenceService} from '../services/persistence.service';

/**
 * Abstract class defining science goal pages
 *
 * Handles ID setting, data loading, and hiding and showing sections
 */

export abstract class ScienceGoalPage {

  /** Unique id of the page */
  id: string;

  /** ScienceGoalPageInterface data */
  page: any;

  /**
   * Sets the id and loads page data
   * @param persistenceService Injected service
   * @param id                      Id for the page
   */
  constructor(private persistenceService: PersistenceService, id: string) {
    this.id = id;
    this.persistenceService.getScienceGoalPage(1, this.id).subscribe(data => this.page = data);
  }

  // /**
  //  * Handles closing or opening of sections
  //  * @param panel The id of the panel to change state
  //  */
  // hiddenChange(panel: string) {
  //   this.persistenceService.hiddenChange(this.id, panel);
  // }

}
