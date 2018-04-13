import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ObsProject} from '../classes/obsproject';
import {ObsProposal} from '../classes/obsproposal';
import {TargetParameters} from '../classes/science-goal/target-parameters';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  })
};

/**
 * Service to supply data to pages and sections from stored objects
 */
@Injectable()
export class PersistenceService implements CanActivate {

  private baseUrl = 'http://localhost:8080';
  private _currentTarget = 0;
  private _loadedProject = new BehaviorSubject<ObsProject>(null);

  /**
   * Constructor, loads data and sets members
   */
  constructor(private http: HttpClient, private router: Router) {
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
    return this.loadedProject;
  }

  get loadedProject(): BehaviorSubject<ObsProject> {
    return this._loadedProject
  }

  selectProject(project: ObsProject) {
    this._loadedProject.next(project);
  }

  getProposal(): Observable<ObsProposal> {
    const options = {params: new HttpParams().set('ref', this._loadedProject.value['prj_ObsProposalRef']['entityId'])};
    return this.http.get<ObsProposal>(`${this.baseUrl}/projects/proposal`, options);
  }

  updateTargetParams(proposal: TargetParameters): Observable<TargetParameters> {
    return this.http.post<TargetParameters>(`${this.baseUrl}/projects`, proposal, httpOptions);
  }

  updateProposal(proposal: ObsProposal): Observable<ObsProposal> {
    return this.http.put<ObsProposal>(`${this.baseUrl}/projects/proposal`, proposal);
  }

  hasProjectLoaded(): boolean {
    return this._loadedProject.getValue() !== null;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.hasProjectLoaded()) {
      return true
    }
    this.router.navigate(['/new-start']).then();
    return false;
  }

}
