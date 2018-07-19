import {IObservingParametersT} from './observing-parameters.interface';

export interface IReservationParametersT extends IObservingParametersT {
  '@type': 'ReservationParametersT';
  calendarId: string;
  reqId: string;
  staffMember: string;
  resourceList: string[];
  description: string;
  summary: string;
  reason: string;
}
