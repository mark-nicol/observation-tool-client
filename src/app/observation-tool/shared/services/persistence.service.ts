import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PersistenceService {

  constructor() {
  }

  getPage(page: string): Observable<any> {
    return null;
  }

  hiddenChange(page: string, panel: string) {

  }

}
