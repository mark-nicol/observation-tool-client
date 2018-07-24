// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {
  ITimeT
} from '../test';
import {IArrayTimeBreakdown} from './array-time-breakdown.interface';
import {IDataRateBreakdown} from './data-rate-breakdown.interface';
import {IReceiverTimeBreakdown} from './receiver-time-breakdown.interface';
import {ITimeAllocationBreakdown} from './time-allocation-breakdown.interface';

export interface IProposalFeedback {
  estimatedTotalIntegrationTime: ITimeT;
  ArrayTimeBreakdown: IArrayTimeBreakdown;
  DataRateBreakdown: IDataRateBreakdown;
  ReceiverTimeBreakdown: IReceiverTimeBreakdown;
  TimeAllocationBreakdown: ITimeAllocationBreakdown;
}
