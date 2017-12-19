import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {ProjectInterface} from '../interfaces/project.interface';
import {ScienceGoalInterface} from '../interfaces/science-goal.interface';

/**
 * Service to supply data to pages and sections from stored objects
 */
@Injectable()
export class PersistenceService {

  /** The public observable of the project data */
  project$: Observable<ProjectInterface>;
  project?;
  /** Data store of the data in memory, allows changes */
  baseUrl = 'http://localhost:8080/projects';

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
    // this.loadProject(NEW_PROJECT_CODE);
  }

  /**
   * GET /projects/{projectCode}
   */
  getProject(projectCode: string): Observable<ProjectInterface> {
    return this.http.get<ProjectInterface>(`${this.baseUrl}/${projectCode}`);
  }

  saveProject() {
    console.log(this.project);
  }

  getScienceGoal(scienceGoalId: string): Observable<ScienceGoalInterface> {
    return PersistenceService.createDataObservable(this.project.scienceGoals[scienceGoalId]);
  }

}
