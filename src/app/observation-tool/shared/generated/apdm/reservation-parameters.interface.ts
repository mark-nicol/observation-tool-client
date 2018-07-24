// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObservingParameters} from './observing-parameters.interface';

export interface IReservationParameters extends IObservingParameters {
  '@type': 'ReservationParametersT';
  calendarId: string;
  reqId: string;
  staffMember: string;
  resourceList: string[];
  description: string;
  summary: string;
  reason: string;
}
