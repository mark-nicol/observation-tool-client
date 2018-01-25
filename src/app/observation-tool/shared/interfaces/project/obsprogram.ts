import {IAlmaProjectDataModel} from './almaprojectdatamodel';
import {IObsPlan} from './obsplan';

export interface IObsProgram extends IAlmaProjectDataModel {
  ObsPlan: IObsPlan;
}
