import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {ProjectInterface} from '../interfaces/project.interface';
import {SourceInterface} from '../interfaces/science-goal-interfaces/field-setup-interfaces/source.interface';
import {ScienceGoalInterface} from '../interfaces/science-goal.interface';

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
  getProject(projectCode: string): Observable<any> {
    this.http.get(`${this.baseUrl}/xml`).subscribe(result => console.log(result));
    return this.http.get(`${this.baseUrl}/xml`);
    // return this.http.get<ProjectInterface>(`${this.baseUrl}/projects/${projectCode}`);
  }

  /**
   * GET /projects/{projectCode}/science-goals/{goalId}
   */
  getScienceGoal(projectCode: string, scienceGoalId: string): Observable<ScienceGoalInterface> {
    return this.http.get<ScienceGoalInterface>(`${this.baseUrl}/projects/${projectCode}/science-goals/${scienceGoalId}`);
  }


  /**
   * GET /projects/{projectCode}/science-goals/{goalId}/sources/{sourceId}
   */
  getSource(projectCode: string, scienceGoalId: string, sourceId: string): Observable<SourceInterface> {
    return this.http.get<SourceInterface>(`${this.baseUrl}/projects/${projectCode}/science-goals/${scienceGoalId}/sources/${sourceId}`);
  }

}
