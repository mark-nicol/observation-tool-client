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


  private baseUrl = 'http://localhost:8080/api/project';
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
        data => {
        },
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
    console.log(project);
    this._loadedProject.next(project);
    this.loadProposal();
  }

  loadScienceGoal(index) {
    this.loadedGoal.next(this._loadedProposal.value.ScienceGoal[index]);
  }

  loadProposal() {
    const options = {params: new HttpParams().set('proposalRef', this._loadedProject.value['obsProposalRef']['entityId'])};
    console.log(`${this.baseUrl}/proposal?proposalRef=${this._loadedProject.value['obsProposalRef']['entityId']}`);
    this.http.get<any>(`${this.baseUrl}/proposal`, options).subscribe(result => {
      console.log(result);
      if (!(result.ScienceGoal instanceof Array) && result.ScienceGoal !== undefined) {
        result.ScienceGoal = [result.ScienceGoal];
      }
      if (result.ScienceGoal) {
        for (const goal of result.ScienceGoal) {
          if (goal.TargetParameters && !(goal.TargetParameters instanceof Array)) {
            goal.TargetParameters = [goal.TargetParameters];
          }
          for (const target of goal.TargetParameters) {
            if (target.SinglePoint && !(target.SinglePoint instanceof Array)) {
              target.SinglePoint = [target.SinglePoint];
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
    return this.http.put<ObsProposal>(`${this.baseUrl}/proposal`, proposal);
  }

  hasProjectLoaded(): boolean {
    return this._loadedProject.getValue() !== null;
  }

  hasProposalLoaded(): boolean {
    return this._loadedProposal.getValue() !== null;
  }

  hasScienceGoals(): boolean {
    if (this.hasProposalLoaded()) {
      return this._loadedProposal.value.ScienceGoal !== (null || undefined);
    }
  }

  hasSources(): boolean {
    if (this.hasScienceGoals()) {
      return this._loadedGoal.getValue().TargetParameters !== (null || undefined);
    }
    return false;
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
      this._loadedProposal.getValue().ScienceGoal.push(new ScienceGoal());
    } else {
      this._loadedProposal.getValue().ScienceGoal = [new ScienceGoal()];
    }
  }

  removeScienceGoal() {
    this._loadedProposal.getValue().ScienceGoal.splice(this._currentGoal, 1);
    this._currentGoal--;
    if (this._currentGoal === -1) {
      this._currentGoal = 0;
    }
    if (this._loadedProposal.getValue().ScienceGoal.length > 0) {
      this.loadScienceGoal(this._currentGoal);
    } else {
      this._loadedProposal.getValue().ScienceGoal = undefined;
      this.router.navigate(['/project']).then(() => this.toastr.info('All science goals removed'));
    }
  }

  addSource() {
    if (this.hasSources()) {
      this._loadedGoal.getValue().TargetParameters.push(new TargetParameters());
    } else {
      this._loadedGoal.getValue().TargetParameters = [new TargetParameters()];
    }
  }

  removeSource() {
    this._loadedGoal.getValue().TargetParameters.splice(this._currentTarget.getValue(), 1);
    this._currentTarget.next(this._currentTarget.value - 1);
    if (this._currentTarget.value === -1) {
      this._currentTarget.next(0);
    }
    if (this._loadedGoal.getValue().TargetParameters.length <= 0) {
      this._loadedGoal.getValue().TargetParameters = undefined;
      this.router.navigate(['/science-goals/general']).then(() => this.toastr.info('All sources removed'));
    }
  }

  setPi(newPi: any) {
    const oldProposal = this._loadedProposal.getValue();
    oldProposal.PrincipalInvestigator = newPi;
    this._loadedProposal.next(oldProposal);
  }

}
