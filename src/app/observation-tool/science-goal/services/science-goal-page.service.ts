import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ScienceGoalPageInterface} from '../../shared/interfaces/science-goal-page.interface';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {SCIENCE_GOAL_PAGES} from '../data/science-goal-pages';

/**
 * Service to supply science goal page data and handle closing of panels
 */

@Injectable()
export class ScienceGoalPageService {

  /** Publicly subscribable page data */
  pages: Observable<{ [id: string]: ScienceGoalPageInterface }>;

  /** Private page data used for loading */
  private _pages: BehaviorSubject<{ [id: string]: ScienceGoalPageInterface }>;

  /** Data store used for data loading */
  private dataStore: {
    pages: { [id: string]: ScienceGoalPageInterface };
  };

  /**
   * Loads all page data and creates observable
   */
  constructor() {
    this.dataStore = {pages: {}};
    this._pages = <BehaviorSubject<{ [id: string]: ScienceGoalPageInterface }>>new BehaviorSubject({});
    this.pages = this._pages.asObservable();
    this.dataStore.pages = SCIENCE_GOAL_PAGES;
    this._pages.next(Object.assign({}, this.dataStore).pages);
  }

  /**
   * Returns observable for a single page
   * @param key Unique key of the page to return
   */
  getPage(key: string): Observable<ScienceGoalPageInterface> {
    let page: Observable<ScienceGoalPageInterface>;
    const subject = <BehaviorSubject<ScienceGoalPageInterface>> new BehaviorSubject({});
    page = subject.asObservable();
    subject.next(this.dataStore.pages[key]);
    return page;
  }

  /**
   * Handles hiding and showing of panels in a page
   * @param page  Key of the page where the panel is located
   * @param panel The panel to show or hide
   */
  hiddenChange(page: string, panel: string) {
    this.dataStore.pages[page].panels[panel].shown = !this.dataStore.pages[page].panels[panel].shown;
  }

}
