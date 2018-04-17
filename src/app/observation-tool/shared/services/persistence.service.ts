import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ObsProject} from '../classes/obsproject';
import {ObsProposal} from '../classes/obsproposal';
import {TargetParameters} from '../classes/science-goal/target-parameters';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {ScienceGoal} from '../classes/science-goal/science-goal';

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
  private _loadedProposal = new BehaviorSubject<ObsProposal>(null);
  private _loadedGoal = new BehaviorSubject<ScienceGoal>(null);
  private _currentGoal = 0;

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

  get currentGoal(): number {
    return this._currentGoal;
  }

  set currentGoal(value: number) {
    this._currentGoal = value;
  }

  getAllProjects(): Observable<ObsProject[]> {
    return this.http.get<ObsProject[]>(`${this.baseUrl}/projects`);
  }

  get loadedProject(): BehaviorSubject<ObsProject> {
    return this._loadedProject
  }

  get loadedProposal(): BehaviorSubject<ObsProposal> {
    return this._loadedProposal;
  }

  get loadedGoal(): BehaviorSubject<ScienceGoal> {
    return this._loadedGoal;
  }

  selectProject(project: ObsProject) {
    this._loadedProject.next(project);
    this.loadProposal();
  }

  loadScienceGoal(index) {
    this.loadedGoal.next(this._loadedProposal.value.prj_ScienceGoal[index]);
  }

  loadProposal() {
    const options = {params: new HttpParams().set('ref', this._loadedProject.value['prj_ObsProposalRef']['entityId'])};
    this.http.get<any>(`${this.baseUrl}/projects/proposal`, options).subscribe(result => {
      if (!(result.prj_ScienceGoal instanceof Array)) {
        result.prj_ScienceGoal = [result.prj_ScienceGoal];
      }
      for (const goal of result.prj_ScienceGoal) {
        if (goal.prj_TargetParameters && !(goal.prj_TargetParameters instanceof Array)) {
          goal.prj_TargetParameters = [goal.prj_TargetParameters];
        }
      }
      this._loadedProposal.next(result);
    });
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

  hasProposalLoaded(): boolean {
    return this._loadedProposal.getValue() !== null;
  }

  hasScienceGoals(): boolean {
    if (this.hasProposalLoaded()) {
      return this._loadedProposal.value.prj_ScienceGoal !== (null || undefined);
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.hasProjectLoaded()) {
      return true
    }
    this.router.navigate(['/new-start']).then();
    return false;
  }

}
