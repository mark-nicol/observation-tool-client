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

import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {tap} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {IObsProposal} from '../interfaces/apdm/obs-proposal.interface';
import {IObsProject} from '../interfaces/apdm/obs-project.interface';
import {IProjectListItem} from '../interfaces/project-list-item.interface';
import {ToastrService} from 'ngx-toastr';
import {ITargetParameters} from '../interfaces/apdm/target-parameters.interface';
import {IScienceGoal} from '../interfaces/apdm/science-goal.interface';

/**
 * Service to supply data to pages and sections from stored objects
 */
@Injectable()
export class ProjectService implements CanActivate {

  private baseUrl = 'http://localhost:8080/project';
  private _loadedProject = new BehaviorSubject<IObsProject>(null);
  private _loadedProposal = new BehaviorSubject<IObsProposal>(null);
  private _currentGoal = new BehaviorSubject<number>(0);
  private _currentTarget = new BehaviorSubject<number>(0);

  isSaving = new BehaviorSubject<boolean>(false);

  private _selectedProject: IProjectListItem;

  /**
   * Constructor, loads data and sets members
   */
  constructor(private http: HttpClient,
              private router: Router,
              private toasts: ToastrService) {
  }

  getAllProjects(): Observable<IProjectListItem[]> {
    return this.http.get<IProjectListItem[]>(`${this.baseUrl}/list`).pipe(
      tap(
        () => {
        },
        error => this.handleError(error)
      )
    );
  }

  selectProject() {
    const options = {params: new HttpParams().set('entityRef', this._selectedProject.obsProjectEntityId)};
    this.http.get<IObsProject>(`${this.baseUrl}/project`, options).subscribe((result: IObsProject) => {
      this._loadedProject.next(result);
      this.loadProposal();
      this.router.navigate(['/project']).then();
    });
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
      return this._loadedProposal.getValue().scienceGoals !== (null || undefined || []) && this._loadedProposal.getValue().scienceGoals.length !== 0;
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
    console.log('addScienceGoal');
    const options = {params: new HttpParams().set('entityRef', this._loadedProject.value.obsProposalRef.entityId)};
    this.http.put<IObsProposal>(`${this.baseUrl}/science-goal`, null, options)
      .pipe(tap(
        null,
        error => {
          this.handleError(error);
        }
      ))
      .subscribe(result => {
        this._loadedProposal.next(result);
      });
  }

  removeScienceGoal() {
    const options = {params: new HttpParams().set('entityRef', this._loadedProposal.getValue().obsProposalEntity.entityId)};
    this.http.delete<IObsProposal>(`${this.baseUrl}/science-goal/${this._currentGoal.getValue()}`, options)
      .pipe(tap(
        null,
        error => this.handleError(error)
      ))
      .subscribe(
        result => this._loadedProposal.next(result)
      );
    let currentGoalValue = this._currentGoal.getValue();
    currentGoalValue--;
    if (currentGoalValue === -1) {
      currentGoalValue = 0;
      this.router.navigate(['/project']).then(() => {
        this.toasts.info('All science goals removed')
      });
    }
    this._currentGoal.next(currentGoalValue);
  }

  addSource() {
    const options = {params: new HttpParams().set('entityRef', this._loadedProposal.getValue().obsProposalEntity.entityId)};
    this.http.put<IObsProposal>(`${this.baseUrl}/science-goal/${this._currentGoal.getValue()}/source`, null, options)
      .pipe(tap(
        null,
        error => this.handleError(error)
      ))
      .subscribe(
        result => {
          console.log(result);
          this._loadedProposal.next(result)
        }
      );
  }

  removeSource() {
    const options = {params: new HttpParams().set('entityRef', this._loadedProposal.getValue().obsProposalEntity.entityId)};
    this.http.delete<IObsProposal>(`${this.baseUrl}/science-goal/${this._currentGoal.getValue()}/source/${this._currentTarget.getValue()}`, options)
      .pipe(tap(
        null,
        error => this.handleError(error)
      ))
      .subscribe(
        result => this._loadedProposal.next(result)
      );
    let currentTargetValue = this._currentTarget.getValue();
    currentTargetValue--;
    if (currentTargetValue === -1) {
      currentTargetValue = 0;
      this.router.navigate(['/science-goals/general']).then(() => {
        this.toasts.info('All sources removed')
      });
    }
    this._currentTarget.next(currentTargetValue);
  }

  setPi(newPi: any) {
    const oldProposal = this._loadedProposal.getValue();
    oldProposal.principalInvestigator = newPi;
    this._loadedProposal.next(oldProposal);
  }

  updateProject(updates: IObsProject) {
    this.isSaving.next(true);
    this.http.put<IObsProject>(`${this.baseUrl}/project`, Object.assign(this._loadedProject.getValue(), updates)).subscribe(response => {
      this._loadedProject.next(response);
      this.isSaving.next(false);
    });
  }

  updateProposal(updates: IObsProposal) {
    this.isSaving.next(true);
    this.http.put<IObsProposal>(`${this.baseUrl}/proposal`, Object.assign(this._loadedProposal.getValue(), updates)).subscribe(response => {
      this._loadedProposal.next(response);
      this.isSaving.next(false);
    });
  }

  updateScienceGoal(updates: IScienceGoal) {
    const proposal = this._loadedProposal.getValue();
    proposal.scienceGoals[this._currentGoal.getValue()] = Object.assign(proposal.scienceGoals[this._currentGoal.getValue()], updates);
    this.updateProposal(proposal);
  }

  updateSource(updates: ITargetParameters) {
    const proposal = this._loadedProposal.getValue();
    proposal
      .scienceGoals[this._currentGoal.getValue()]
      .targetParameters[this._currentTarget.getValue()]
      = Object.assign(
      proposal
        .scienceGoals[this._currentGoal.getValue()]
        .targetParameters[this._currentTarget.getValue()], updates);
    this.updateProposal(proposal);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.hasProjectLoaded()) {
      return true
    }
    this.router.navigate(['/new-start']).then();
    return false;
  }

  handleError(error: HttpErrorResponse) {
    this.isSaving.next(false);
    if (error.status === 0) { // No server found or CORS
      this.toasts.error('Could not connect to server', 'Error');
    } else if (error.status === 404) {
      this.toasts.error('Not found', 'Error');
    } else if (error.status === 500) {
      this.toasts.error(`Server error\n${error.error.exception}`, 'Error');
    } else {
      this.toasts.error('Other error');
    }
    return new ErrorObservable('Broke');
  }

  get loadedProject(): BehaviorSubject<IObsProject> {
    return this._loadedProject
  }

  get loadedProposal(): BehaviorSubject<IObsProposal> {
    return this._loadedProposal;
  }

  get currentGoal(): BehaviorSubject<number> {
    return this._currentGoal;
  }

  setCurrentGoal(value: number) {
    this._currentTarget.next(0);
    if (value >= this._loadedProposal.getValue().scienceGoals.length) {
      this._currentGoal.next(0);
    } else {
      this._currentGoal.next(value);
    }
  }

  get currentTarget(): BehaviorSubject<number> {
    return this._currentTarget;
  }

  setCurrentTarget(value: number) {
    this._currentTarget.next(value);
  }

  get selectedProject(): IProjectListItem {
    return this._selectedProject;
  }

  set selectedProject(value: IProjectListItem) {
    this._selectedProject = value;
  }

}
