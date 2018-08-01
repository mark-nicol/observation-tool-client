/*
 * ALMA - Atacama Large Millimeter Array
 * Copyright (c) UKATC - UK Astronomy Technology Centre, Science and Technology Facilities Council, 2018
 * (in the framework of the ALMA collaboration).
 * All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307  USA
 */

import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {tap} from 'rxjs/operators';
import {ToastsManager} from 'ng2-toastr';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import * as _ from 'lodash';
import {IObsProposal} from '../interfaces/apdm/obs-proposal.interface';
import {IScienceGoal} from '../interfaces/apdm/science-goal.interface';
import {IObsProject} from '../interfaces/apdm/obs-project.interface';
import {IProjectListItem} from '../interfaces/project-list-item.interface';

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

  private baseUrl = 'http://localhost:8080/project';
  private _currentTarget = new BehaviorSubject<number>(0);
  private _loadedProject = new BehaviorSubject<IObsProject>(null);
  private _loadedProposal = new BehaviorSubject<IObsProposal>(null);
  private _loadedGoal = new BehaviorSubject<IScienceGoal>(null);
  private _currentGoal = 0;

  private _selectedProject: IProjectListItem;

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

  getAllProjects(): Observable<IObsProject[]> {
    return this.http.get<IObsProject[]>(`${this.baseUrl}/list`).pipe(
      tap(
        data => {
        },
        error => this.handleError(error)
      )
    );
  }

  get loadedProject(): BehaviorSubject<IObsProject> {
    return this._loadedProject
  }

  get loadedProposal(): BehaviorSubject<IObsProposal> {
    return this._loadedProposal;
  }

  get loadedGoal(): BehaviorSubject<IScienceGoal> {
    return this._loadedGoal;
  }

  selectProject() {
    const options = {params: new HttpParams().set('entityRef', this._selectedProject.obsProjectEntityId)};
    this.http.get<IObsProject>(`${this.baseUrl}/project`, options).subscribe((result: IObsProject) => {
      this._loadedProject.next(result);
      this.loadProposal();
      this.router.navigate(['/project']).then();
    });
  }

  loadScienceGoal(index) {
    this.loadedGoal.next(<IScienceGoal>this._loadedProposal.value.scienceGoals[index]);
  }

  loadProposal() {
    const options = {params: new HttpParams().set('entityRef', this._loadedProject.value.obsProposalRef.entityId)};
    this.http.get<IObsProposal>(`${this.baseUrl}/proposal`, options).subscribe(result => {
      this._loadedProposal.next(result);
    });
  }

  hasProjectLoaded(): boolean {
    return this._loadedProject.getValue() !== null;
  }

  hasProposalLoaded(): boolean {
    return this._loadedProposal.getValue() !== null;
  }

  hasScienceGoals(): boolean {
    if (this.hasProposalLoaded()) {
      return this._loadedProposal.value.scienceGoals !== (null || undefined);
    }
  }

  hasSources(): boolean {
    if (this.hasScienceGoals()) {
      return this._loadedGoal.getValue().targetParameters !== (null || undefined);
    }
    return false;
  }

  startNewProject() {
    this.http.post<IObsProject>(`${this.baseUrl}`, null).subscribe(result => {
      this._loadedProject.next(result);
      this.router.navigate(['/project']).then();
      this.loadProposal();
    });
  }



  addScienceGoal() {
    // TODO Fix
    // if (this.hasScienceGoals()) {
    //   this._loadedProposal.getValue().ScienceGoal.push(new ScienceGoal());
    // } else {
    //   this._loadedProposal.getValue().ScienceGoal = [new ScienceGoal()];
    // }
  }

  removeScienceGoal() {
    this._loadedProposal.getValue().scienceGoals.splice(this._currentGoal, 1);
    this._currentGoal--;
    if (this._currentGoal === -1) {
      this._currentGoal = 0;
    }
    if (this._loadedProposal.getValue().scienceGoals.length > 0) {
      this.loadScienceGoal(this._currentGoal);
    } else {
      this._loadedProposal.getValue().scienceGoals = undefined;
      this.router.navigate(['/project']).then(() => this.toastr.info('All science goals removed'));
    }
  }

  addSource() {
    // TODO Fix
    // if (this.hasSources()) {
    //   this._loadedGoal.getValue().TargetParameters.push(new TargetParameters());
    // } else {
    //   this._loadedGoal.getValue().TargetParameters = [new TargetParameters()];
    // }
  }

  removeSource() {
    this._loadedGoal.getValue().targetParameters.splice(this._currentTarget.getValue(), 1);
    this._currentTarget.next(this._currentTarget.value - 1);
    if (this._currentTarget.value === -1) {
      this._currentTarget.next(0);
    }
    if (this._loadedGoal.getValue().targetParameters.length <= 0) {
      this._loadedGoal.getValue().targetParameters = undefined;
      this.router.navigate(['/science-goals/general']).then(() => this.toastr.info('All sources removed'));
    }
  }

  setPi(newPi: any) {
    const oldProposal = this._loadedProposal.getValue();
    oldProposal.principalInvestigator = newPi;
    this._loadedProposal.next(oldProposal);
  }

  updateProject(updates: IObsProject) {
    this.http.put<IObsProject>(`${this.baseUrl}/project`, _.merge(this.loadedProject.getValue(), updates)).subscribe(response => {
      this._loadedProject.next(response);
    });
  }

  updateProposal(updates: IObsProposal) {
    this.http.put<IObsProposal>(`${this.baseUrl}/proposal`, _.merge(this.loadedProposal.getValue(), updates)).subscribe(response => {
      this._loadedProposal.next(response);
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

  get selectedProject(): IProjectListItem {
    return this._selectedProject;
  }

  set selectedProject(value: IProjectListItem) {
    this._selectedProject = value;
  }

}
