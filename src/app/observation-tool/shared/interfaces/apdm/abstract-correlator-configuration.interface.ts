// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {Time} from '../../../../units/classes/time';

export interface IAbstractCorrelatorConfiguration {
  integrationDuration: Time;
  channelAverageDuration: Time;
  enable180DegreeWalshFunction: boolean;
  enable90DegreeWalshFunction: boolean;
  aPCDataSets: string;
  cAM: string;
  lOOffsettingMode: string;
}
