import {IObservingParametersT} from './observing-parameters.interface';
import {ITimeT} from './test';

export interface ICalibratorParametersT extends IObservingParametersT {
  '@type': 'CalibratorParametersT';
  cycleTime: ITimeT;
  defaultIntegrationTime: ITimeT;
  subScanDuration: ITimeT;
  forceAtmCal: boolean;
  forceExecution: boolean;
  dataOrigin: string;
}
