import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ProjectInterface} from '../interfaces/project.interface';

/**
 * Service to supply data to pages and sections from stored objects
 */
@Injectable()
export class PersistenceService {

  apiUrl = 'http://localhost:8080/projects';

  /**
   * Constructor, loads data and sets members
   */
  constructor(private http: HttpClient) {
  }


  /**
   * GET /projects
   */
  getProjects(): Observable<ProjectInterface[]> {
    return this.http.get<ProjectInterface[]>(this.apiUrl);
  }

  /**
   * GET /projects/{projectCode}
   */
  getProject(projectCode: string): Promise<ProjectInterface> {
    return this.http.get<ProjectInterface>(this.apiUrl.concat('/', projectCode)).toPromise();
  }

  saveProject() {
    console.log('Save');
  }

}
