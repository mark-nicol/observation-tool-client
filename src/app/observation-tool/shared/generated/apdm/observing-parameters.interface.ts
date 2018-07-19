import {IKeywordValueT} from './keyword-value.interface';

export interface IObservingParametersT {
  '@type': 'HolographyParametersT' | 'ScienceParametersT' | 'OpticalPointingParametersT' | 'RadiometricPointingParametersT' | 'ReservationParametersT' | 'CalibratorParametersT';
  entityPartId: string;
  name: string;
  expertParameter: IKeywordValueT[];
  almatype: string;
}
