import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import {ObsProject} from '../classes/obsproject';
import {ObsProposal} from '../classes/obsproposal';
import {ScienceGoal} from '../classes/science-goal/science-goal';
import {TargetParameters} from '../classes/science-goal/target-parameters';
import {catchError} from 'rxjs/operators';
import {RequestOptions} from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type':  'application/json'
  })
};

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
    this._currentTarget = value;
  }

  getAllProjects(): Observable<ObsProject[]> {
    return this.http.get<ObsProject[]>(`${this.baseUrl}/projects`);
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
    return this.http.get<any>(`${this.baseUrl}/projects/goal`)
               .map(result => {
                 return _.merge(new ScienceGoal(), result);
               })
  }

  updateTargetParams(proposal: TargetParameters): Observable<TargetParameters> {
    console.log(proposal);
    return this.http.post<TargetParameters>(`${this.baseUrl}/projects`, proposal, httpOptions);
  }

  updateProposal(proposal: ObsProposal): Observable<ObsProposal> {
    console.log('Update proposal');
    return this.http.put<ObsProposal>(`${this.baseUrl}/projects/proposal`, proposal);
  }

}
