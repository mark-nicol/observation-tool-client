import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {SCIENCE_GOAL_PAGES} from '../data/science-goal-pages';
import {ProjectInterface} from '../interfaces/project.interface';

/**
 * Service to supply data to pages and sections from stored objects
 */
@Injectable()
export class PersistenceService {

  /** The public observable of the project data */
  project: Observable<ProjectInterface>;
  /** Private subject of the project data */
  private _project: BehaviorSubject<ProjectInterface>;
  /** Data store of the data in memory, allows changes */
  private _dataStore: {
    project: any
  };

  /**
   * Constructor, loads data and sets members
   */
  constructor() {
    this._dataStore         = {project: {}};
    this._project           = <BehaviorSubject<ProjectInterface>>new BehaviorSubject({});
    this.project            = this._project.asObservable();
    this._dataStore.project = SCIENCE_GOAL_PAGES;
    /*UPDATE*/
    this._project.next(Object.assign({}, this._dataStore).project);
  }

  /**
   * Returns the project observable
   */
  getProject(): Observable<ProjectInterface> {
    return this.project;
  }

  /**
   * Returns an observable of a single page's data
   * @param page I.D. of the page to retrieve data for
   */
  getPage(page: string): Observable</*UPDATE*/> {
    let returnPage: Observable</*UPDATE*/>;
    const subject = <BehaviorSubject</*UPDATE*/>> new BehaviorSubject({});
    returnPage    = subject.asObservable();
    subject.next(this._dataStore.pages[page]);
    /*UPDATE*/
    return returnPage;
  }

  getScienceGoal() {

  }

  getScienceGoalPage() {

  }

  getScienceGoalPageSection() {

  }

  getScienceGoalDataItem() {

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
    /*UPDATE*/
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
    /*UPDATE*/
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
    /*UPDATE*/
  }

}
