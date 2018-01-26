import {IAlmaProjectDataModel} from '../almaprojectdatamodel.interface';

export interface ITechnicalJustification extends IAlmaProjectDataModel {
  justificationText: string;
  justificationKey: string;
}
