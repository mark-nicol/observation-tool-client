import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {ObsProject} from '../classes/obsproject';
import {ObsProposal} from '../classes/obsproposal';
import {ScienceGoal} from '../classes/science-goal/science-goal';

/**
 * Service to supply data to pages and sections from stored objects
 */
@Injectable()
export class PersistenceService {

  /** Data store of the data in memory, allows changes */
  baseUrl = 'http://localhost:8080';

  private static createDataObservable(data): Observable<any> {
    const subject  = <BehaviorSubject<any>> new BehaviorSubject({}),
          toReturn = subject.asObservable();
    subject.next(data);
    return toReturn;
  }

  /**
   * Constructor, loads data and sets members
   */
  constructor(private http: HttpClient) {
  }

  /**
   * GET /projects/{projectCode}
   */
  getProject(projectCode: string): Observable<ObsProject> {
    return this.http.get<any>(`${this.baseUrl}/projects/project`)
               .map(result => {
                 return new ObsProject().initFromJson(result);
               });
  }

  getProposal(): Observable<ObsProposal> {
    return this.http.get<any>(`${this.baseUrl}/projects/proposal`)
               .map(result => {
                 return new ObsProposal().initFromJson(result);
               })
  }

  getScienceGoal(): Observable<ScienceGoal> {
    return this.http.get<any>(`${this.baseUrl}/projects/science-goals/goal`)
               .map(result => {
                 return new ScienceGoal().initFromJson(result);
               })
  }

  // /**
  //  * GET /projects/{projectCode}/science-goals/{goalId}
  //  */
  // getScienceGoal(projectCode: string, scienceGoalId: string): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/projects/${projectCode}/science-goals/${scienceGoalId}`);
  // }


  // /**
  //  * GET /projects/{projectCode}/science-goals/{goalId}/sources/{sourceId}
  //  */
  getSource(projectCode: string, scienceGoalId: string, sourceId: string): Observable<any> {
    return null;
  //   return this.http.get<any>(`${this.baseUrl}/projects/${projectCode}/science-goals/${scienceGoalId}/sources/${sourceId}`);
  }

}
