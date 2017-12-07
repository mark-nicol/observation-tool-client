import {Injectable} from '@angular/core';
import {json} from 'd3-request';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {SCIENCE_GOAL_PAGES} from '../data/science-goal-pages';
import {ScienceGoalPageInterface} from '../interfaces/science-goal-page.interface';

/**
 * Service to supply data to pages and sections from stored objects
 *
 * Also manages the hiding and showing of sections for persistence
 */
@Injectable()
export class PersistenceService {

  /** The public observable of the pages data */
  pages: Observable<{ [id: string]: ScienceGoalPageInterface }>;
  /** Private subject of the page data */
  private _pages: BehaviorSubject<{ [id: string]: ScienceGoalPageInterface }>;
  /** Data store of the data in memory, allows changes */
  private _dataStore: {
    pages: { [id: string]: ScienceGoalPageInterface };
  };

  /**
   * Constructor, loads data and sets members
   */
  constructor() {
    this._dataStore       = {pages: {}};
    this._pages           = <BehaviorSubject<{ [id: string]: ScienceGoalPageInterface }>>new BehaviorSubject({});
    this.pages            = this._pages.asObservable();
    this._dataStore.pages = SCIENCE_GOAL_PAGES;
    this._pages.next(Object.assign({}, this._dataStore).pages);
  }

  /**
   * Returns the pages observable
   */
  getPages(): Observable<{ [id: string]: ScienceGoalPageInterface }> {
    return this.pages;
  }

  /**
   * Returns an observable of a single page's data
   * @param page I.D. of the page to retrieve data for
   */
  getPage(page: string): Observable<ScienceGoalPageInterface> {
    let returnPage: Observable<ScienceGoalPageInterface>;
    const subject = <BehaviorSubject<ScienceGoalPageInterface>> new BehaviorSubject({});
    returnPage    = subject.asObservable();
    subject.next(this._dataStore.pages[page]);
    return returnPage;
  }

  /**
   * Returns an observable of a single panel's data
   * @param page  I.D. of the page which contains the panel
   * @param panel I.D. of the panel to retrieve data for
   */
  getPanelData(page: string, panel: string): Observable<any> {
    let returnData: Observable<any>;
    const subject = <BehaviorSubject<any>> new BehaviorSubject({});
    returnData    = subject.asObservable();
    subject.next(this._dataStore.pages[page].sections[panel].data);
    return returnData;
  }

  /**
   * Returns a single item from a panel, used for reading radio values or bools
   * @param page  I.D. of the page which contains the panel
   * @param panel I.D. of the panel with contains the item
   * @param item  I.D. of the item to retrieve data from
   */
  getDataItem(page: string, panel: string, item: string): any {
    return this._dataStore.pages[page].sections[panel].data[item];
  }

  // /**
  //  * Switches the shown bool for a panel
  //  * @param page  The page which holds the panel to hide
  //  * @param panel I.D. of the panel to hide
  //  */
  // hiddenChange(page: string, panel: string) {
  //   this._dataStore.pages[page].sections[panel].shown = !this._dataStore.pages[page].sections[panel].shown;
  // }

  /**
   *
   */
  saveProject() {
    console.log(this._dataStore.pages);
  }

}
