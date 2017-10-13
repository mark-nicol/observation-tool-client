import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Page} from "../models/page";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {PAGES} from "../data/pages";

@Injectable()
export class ScienceGoalPanelService {

  pages: Observable<{ [id: string]: Page }>;
  private _pages: BehaviorSubject<{ [id: string]: Page }>;
  private baseUrl: string;
  private dataStore: {
    pages: { [id: string]: Page };
  };

  constructor() {
    this.baseUrl = './data/pages';
    this.dataStore = {pages: {}};
    this._pages = <BehaviorSubject<{ [id: string]: Page }>>new BehaviorSubject({});
    this.pages = this._pages.asObservable();
    this.dataStore.pages = PAGES;
    this._pages.next(Object.assign({}, this.dataStore).pages);
  }

  getPage(key: string): Observable<Page> {
    let page: Observable<Page>;
    let subject = <BehaviorSubject<Page>> new BehaviorSubject({});
    page = subject.asObservable();
    subject.next(this.dataStore.pages[key]);
    return page;
  }

  hiddenChange(page: string, panel: string) {
    this.dataStore.pages[page].panels[panel].shown = !this.dataStore.pages[page].panels[panel].shown;
  }

}
