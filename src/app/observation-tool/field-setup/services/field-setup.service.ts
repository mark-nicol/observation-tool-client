import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {FIELD_SETUP} from '../data/field-setup';

/**
 * Service for the field setup page of a science goal
 */

@Injectable()
export class FieldSetupService {

  /** The public view of the data, subscribed to by an observing page */
  data: Observable<any>;

  /** The private view of the data, used for loading */
  private _data: BehaviorSubject<any>;

  /** URL of the data location */
  private baseUrl: string;

  /** Data store used for accessing the loaded data */
  private dataStore: { data: any };

  /**
   * Sets properties and loads data into the store
   */
  constructor() {
    this.baseUrl = './data/field-setup';
    this.dataStore = {data: {}};
    this._data = <BehaviorSubject<{}>> new BehaviorSubject({});
    this.data = this._data.asObservable();
    this.dataStore.data = FIELD_SETUP;
    this._data.next(Object.assign({}, this.dataStore).data);
  }

  /**
   * Gets data for a single page based on a key
   * @param key The identifying key for the page
   */
  getPageData(key: any): Observable<any> {
    let data: Observable<any>;
    const subject = <BehaviorSubject<any>> new BehaviorSubject({});
    data = subject.asObservable();
    subject.next(this.dataStore.data[key]);
    return data;
  }

  /**
   * Get a single data item from a page
   * @param key  The key of the page
   * @param item The item to retrieve data for
   */
  getItem(key: string, item: string): any {
    return this.dataStore.data[key][item];
  }

}
