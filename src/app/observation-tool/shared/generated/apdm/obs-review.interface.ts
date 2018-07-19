import {IObsPhase} from './obs-phase.interface';
import {IObsReviewEntityT} from './entity.interface';
import {IObsProjectRefT} from './entity-ref.interface';

export interface IObsReview extends IObsPhase {
  '@type': 'ObsReview';
  obsReviewEntity: IObsReviewEntityT;
  obsProjectRef: IObsProjectRefT;
  schemaVersion: string;
  revision: string;
  almatype: string;
}
