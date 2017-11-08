import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ScienceGoalPageInterface} from '../interfaces/science-goal-page.interface';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {SCIENCE_GOAL_PAGES} from '../data/science-goal-pages';

@Injectable()
export class PersistenceService {

  pages: Observable<{ [id: string]: ScienceGoalPageInterface }>;
  private _pages: BehaviorSubject<{ [id: string]: ScienceGoalPageInterface }>;
  private _dataStore: {
    pages: { [id: string]: ScienceGoalPageInterface };
  };

  constructor() {
    this._dataStore = {pages: {}};
    this._pages = <BehaviorSubject<{ [id: string]: ScienceGoalPageInterface }>>new BehaviorSubject({});
    this.pages = this._pages.asObservable();
    this._dataStore.pages = SCIENCE_GOAL_PAGES;
    this._pages.next(Object.assign({}, this._dataStore).pages);
  }

  getPages(): Observable<{ [id: string]: ScienceGoalPageInterface }> {
    return this.pages;
  }

  getPage(page: string): Observable<ScienceGoalPageInterface> {
    let returnPage: Observable<ScienceGoalPageInterface>;
    const subject = <BehaviorSubject<ScienceGoalPageInterface>> new BehaviorSubject({});
    returnPage = subject.asObservable();
    subject.next(this._dataStore.pages[page]);
    return returnPage;
  }

  getPanelData(page: string, panel: string): Observable<any> {
    let returnData: Observable<any>;
    const subject = <BehaviorSubject<any>> new BehaviorSubject({});
    returnData = subject.asObservable();
    subject.next(this._dataStore.pages[page].panels[panel].data);
    return returnData;
  }

  getDataItem(page: string, panel: string, item: string): any {
    return this._dataStore.pages[page].panels[panel].data[item];
  }

  hiddenChange(page: string, panel: string) {
    this._dataStore.pages[page].panels[panel].shown = !this._dataStore.pages[page].panels[panel].shown;
  }

}
