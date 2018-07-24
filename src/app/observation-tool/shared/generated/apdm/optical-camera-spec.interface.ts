// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ITimeT} from './test';
import {IAbstractInstrumentSpec} from './abstract-instrument-spec.interface';

export interface IOpticalCameraSpec extends IAbstractInstrumentSpec {
  minIntegrationTime: ITimeT;
  filter: string;
}
