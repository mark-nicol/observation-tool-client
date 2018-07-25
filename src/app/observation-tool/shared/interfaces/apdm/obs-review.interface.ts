// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObsPhase} from './obs-phase.interface';
import {IObsReviewEntity} from './entity.interface';
import {IObsProjectRef} from './entity-ref.interface';

export interface IObsReview extends IObsPhase {
  '@type': 'ObsReview';
  obsReviewEntity: IObsReviewEntity;
  obsProjectRef: IObsProjectRef;
  schemaVersion: string;
  revision: string;
  almatype: string;
}
