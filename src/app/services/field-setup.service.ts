import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {FIELD_SETUP} from "../data/field-setup";

@Injectable()
export class FieldSetupService {

  data: Observable<any>;
  private _data: BehaviorSubject<any>;
  private baseUrl: string;
  private dataStore: { data: any };

  constructor() {
    this.baseUrl = './data/field-setup';
    this.dataStore = {data: {}};
    this._data = <BehaviorSubject<{}>> new BehaviorSubject({});
    this.data = this._data.asObservable();
    this.dataStore.data = FIELD_SETUP;
    this._data.next(Object.assign({}, this.dataStore).data);
  }

  getPageData(key: any): Observable<any>{
    let data: Observable<any>;
    let subject = <BehaviorSubject<any>> new BehaviorSubject({});
    data = subject.asObservable();
    subject.next(this.dataStore.data[key]);
    return data;
  }

  getItem(key: string, item: string): any {
    return this.dataStore.data[key][item];
  }

}
