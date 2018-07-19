import {ITimeT} from './test';
import {IAbstractInstrumentSpecT} from './abstract-instrument-spec.interface';

export interface IOpticalCameraSpecT extends IAbstractInstrumentSpecT {
  minIntegrationTime: ITimeT;
  filter: string;
}
