import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ObsProject} from '../classes/obsproject';
import {ObsProposal} from '../classes/obsproposal';
import {TargetParameters} from '../classes/science-goal/target-parameters';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {ScienceGoal} from '../classes/science-goal/science-goal';
import {tap} from 'rxjs/operators';
import {ToastsManager} from 'ng2-toastr';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import * as _ from 'lodash';

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
export class ProjectService implements CanActivate {


  private baseUrl = 'http://localhost:8080';
  private _currentTarget = new BehaviorSubject<number>(0);
  private _loadedProject = new BehaviorSubject<ObsProject>(null);
  private _loadedProposal = new BehaviorSubject<ObsProposal>(null);
  private _loadedGoal = new BehaviorSubject<ScienceGoal>(null);
  private _currentGoal = 0;

  /**
   * Constructor, loads data and sets members
   */
  constructor(private http: HttpClient,
              private router: Router,
              private toastr: ToastsManager) {
  }

  get currentTarget(): BehaviorSubject<number> {
    return this._currentTarget;
  }

  setCurrentTarget(value: number) {
    this._currentTarget.next(value);
  }

  get currentGoal(): number {
    return this._currentGoal;
  }

  set currentGoal(value: number) {
    this._currentGoal = value;
  }

  getAllProjects(): Observable<ObsProject[]> {
    return this.http.get<ObsProject[]>(`${this.baseUrl}/projects`).pipe(
      tap(
        data => {},
        error => this.handleError(error)
      )
    );
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
      if (!(result.prj_ScienceGoal instanceof Array) && result.prj_ScienceGoal !== undefined) {
        result.prj_ScienceGoal = [result.prj_ScienceGoal];
      }
      if (result.prj_ScienceGoal) {
        for (const goal of result.prj_ScienceGoal) {
          if (goal.prj_TargetParameters && !(goal.prj_TargetParameters instanceof Array)) {
            goal.prj_TargetParameters = [goal.prj_TargetParameters];
          }
          for (const target of goal.prj_TargetParameters) {
            if (target.prj_SinglePoint && !(target.prj_SinglePoint instanceof Array)) {
              target.prj_SinglePoint = [target.prj_SinglePoint];
            }
          }
        }
      }


      this._loadedProposal.next(result);
    });
  }

  updateScienceGoal(updates: any) {
    console.log('Old goal:', this._loadedGoal.getValue());
    console.log('New goal:', _.merge(this._loadedGoal.getValue(), updates));
    // this._loadedGoal.next(_.merge(this._loadedGoal.getValue(), updates));
    // console.log(this._loadedGoal.getValue());
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

  startNewProject() {
    this.http.get('assets/new_project/ObsProject.json').subscribe(result => {
      this._loadedProject.next(Object.assign(new ObsProject, result));
    });
    this.http.get('assets/new_project/ObsProposal.json').subscribe(result => {
      this._loadedProposal.next(Object.assign(new ObsProposal, result));
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.hasProjectLoaded()) {
      return true
    }
    this.router.navigate(['/new-start']).then();
    return false;
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.status === 0) { // No server found or CORS
      this.toastr.error('Could not connect to server', 'Error');
    } else if (error.status === 404) {
      this.toastr.error('Not found', 'Error');
    } else if (error.status === 500) {
      this.toastr.error('Server error', 'Error');
    } else {
      this.toastr.error('Other error')
    }
    return new ErrorObservable('Broke');
  }

  addScienceGoal() {
    if (this.hasScienceGoals()) {
      this._loadedProposal.getValue().prj_ScienceGoal.push(new ScienceGoal());
    } else {
      this._loadedProposal.getValue().prj_ScienceGoal = [new ScienceGoal()];
    }
  }

}
