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

  /** The public observable of the project data */
  project: Observable<ProjectInterface>;
  /** Private subject of the project data */
  private _project: BehaviorSubject<ProjectInterface>;
  /** Data store of the data in memory, allows changes */
  private _dataStore: {
    project: any
  };
  baseUrl = 'http://localhost:8080/projects/0';

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
    this._dataStore = {project: null};
    this._project   = <BehaviorSubject<ProjectInterface>>new BehaviorSubject({});
    this.project    = this._project.asObservable();
    this.http.get(this.baseUrl).subscribe(res => this._dataStore.project = res);
    this._project.next(Object.assign({}, this._dataStore).project);
  }

  /**
   * Returns the project observable
   */
  getProject(): Observable<ProjectInterface> {
    return this.project;
  }

  getScienceGoal(goalId: number): Observable<ScienceGoalInterface> {
    return PersistenceService.createDataObservable(this._dataStore.project.scienceGoals[goalId]);
  }

  getScienceGoalPage(goalId: number, page: string): Observable<any> {
    if (this._dataStore.project) {
      return PersistenceService.createDataObservable(this._dataStore.project.scienceGoals[goalId][page]);
    }
  }

  getScienceGoalPageSection(goalId: number, page: string, section: string): Observable<any> {
    return PersistenceService.createDataObservable(this._dataStore.project.scienceGoals[goalId][page][section]);
  }

  getSource(goalId: number, sourceId: number): Observable<SourceInterface> {
    return PersistenceService.createDataObservable(this._dataStore.project
      .scienceGoals[goalId]['fieldSetup']
      .sources[sourceId]);
  }

  getSourceTargetType() {
    return this._dataStore.project.scienceGoals[0]['fieldSetup'].sources[0].targetType;
  }

  /**
   *
   */
  saveProject() {
    console.log(this._dataStore.project);
    /*UPDATE*/
  }

}
