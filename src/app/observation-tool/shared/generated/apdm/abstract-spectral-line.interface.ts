import {IFrequencyT} from './test';

export interface IAbstractSpectralLineT {
  restFrequency: IFrequencyT;
  transition: string;
  spatalogId: string;
  description: string;
}
