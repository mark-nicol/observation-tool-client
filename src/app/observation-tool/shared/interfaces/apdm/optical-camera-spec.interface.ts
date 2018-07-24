// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractInstrumentSpec} from './abstract-instrument-spec.interface';
import {Time} from '../../../../units/classes/time';

export interface IOpticalCameraSpec extends IAbstractInstrumentSpec {
  minIntegrationTime: Time;
  filter: string;
}
