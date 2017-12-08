import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {NEW_PROJECT} from '../data/new-project';
import {ProjectInterface} from '../interfaces/project.interface';
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

  private static createDataObservable(data): Observable<any> {
    const subject  = <BehaviorSubject<any>> new BehaviorSubject({}),
          toReturn = subject.asObservable();
    subject.next(data);
    return toReturn;
  }

  /**
   * Constructor, loads data and sets members
   */
  constructor() {
    this._dataStore         = {project: {}};
    this._project           = <BehaviorSubject<ProjectInterface>>new BehaviorSubject({});
    this.project            = this._project.asObservable();
    this._dataStore.project = NEW_PROJECT;
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
    // const subject    = <BehaviorSubject<ScienceGoalInterface>> new BehaviorSubject({}),
    //       returnGoal = subject.asObservable();
    // subject.next(this._dataStore.project.proposal.scienceGoals[goalId]);
    // return returnGoal;
  }

  getScienceGoalPage(goalId: number, page: string): Observable<any> {
    return PersistenceService.createDataObservable(this._dataStore.project.scienceGoals[goalId][page]);
    // const subject    = <BehaviorSubject<any>> new BehaviorSubject({}),
    //       returnGoal = subject.asObservable();
    // subject.next(this._dataStore.project.proposal.scienceGoals[goalId][page]);
    // return returnGoal;
  }

  getScienceGoalPageSection(goalId: number, page: string, section: string): Observable<any> {
    return PersistenceService.createDataObservable(this._dataStore.project.scienceGoals[goalId][page][section]);
    // const subject    = <BehaviorSubject<any>> new BehaviorSubject({}),
    //       returnGoal = subject.asObservable();
    // subject.next(this._dataStore.project.proposal.scienceGoals[goalId][page][section]);
    // return returnGoal;
  }

  getSource(goalId: number, sourceId: number) {
    console.log(this._dataStore.project
      .scienceGoals[goalId]['fieldSetup']
      .sources[sourceId]);
    return PersistenceService.createDataObservable(this._dataStore.project
      .scienceGoals[goalId]['fieldSetup']
      .sources[sourceId]);
  }

  getScienceGoalDataItem() {

  }

  /**
   *
   */
  saveProject() {
    console.log(this._dataStore.project);
    /*UPDATE*/
  }

}
