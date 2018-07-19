import {
  ITimeT
} from '../test';
import {IArrayTimeBreakdownT} from './array-time-breakdown.interface';
import {IDataRateBreakdownT} from './data-rate-breakdown.interface';
import {IReceiverTimeBreakdownT} from './receiver-time-breakdown.interface';
import {ITimeAllocationBreakdownT} from './time-allocation-breakdown.interface';

export interface IProposalFeedbackT {
  estimatedTotalIntegrationTime: ITimeT;
  ArrayTimeBreakdown: IArrayTimeBreakdownT;
  DataRateBreakdown: IDataRateBreakdownT;
  ReceiverTimeBreakdown: IReceiverTimeBreakdownT;
  TimeAllocationBreakdown: ITimeAllocationBreakdownT;
}
