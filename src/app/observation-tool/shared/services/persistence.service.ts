import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import {ObsProject} from '../classes/obsproject';
import {ObsProposal} from '../classes/obsproposal';
import {ScienceGoal} from '../classes/science-goal/science-goal';

/**
 * Service to supply data to pages and sections from stored objects
 */
@Injectable()
export class PersistenceService {

  private baseUrl        = 'http://localhost:8080';
  private _currentTarget = 0;

  /**
   * Constructor, loads data and sets members
   */
  constructor(private http: HttpClient) {
  }

  get currentTarget(): number {
    return this._currentTarget;
  }

  set currentTarget(value: number) {
    this._currentTarget = value + 1;
  }

  /**
   * GET /projects/{projectCode}
   */
  getProject(): Observable<ObsProject> {
    return this.http.get<any>(`${this.baseUrl}/projects/project`)
               .map(result => {
                 return _.merge(new ObsProject, result);
               });
  }

  getProposal(): Observable<ObsProposal> {
    return this.http.get<any>(`${this.baseUrl}/projects/proposal`)
               .map(result => {
                 return _.merge(new ObsProposal, result);
               })
  }

  getScienceGoal(): Observable<ScienceGoal> {
    return this.http.get<any>(`${this.baseUrl}/projects/science-goals/goal`)
               .map(result => {
                 return _.merge(new ScienceGoal(), result);
               })
  }

}
