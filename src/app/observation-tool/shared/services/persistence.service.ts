import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {ProjectInterface} from '../interfaces/project.interface';

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
    this._dataStore = {project: null};
    this._project   = <BehaviorSubject<ProjectInterface>>new BehaviorSubject({});
    this.project    = this._project.asObservable();
    this.loadProject('ABC123');
  }


  /**
   * GET /projects/{projectCode}
   */
  loadProject(projectCode: string) {
    this.http.get(this.baseUrl.concat('/', projectCode)).subscribe(result => this._dataStore.project = result);
    this._project.next(Object.assign({}, this._dataStore).project);
  }

  saveProject() {
    console.log('Save');
  }

}
