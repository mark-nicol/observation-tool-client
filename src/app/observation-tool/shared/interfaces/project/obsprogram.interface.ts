import {IAlmaProjectDataModel} from './almaprojectdatamodel.interface';
import {IObsPlan} from './obsplan.interface';

export interface IObsProgram extends IAlmaProjectDataModel {
  ObsPlan: IObsPlan;
}
