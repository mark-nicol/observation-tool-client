import {ITimeT} from './test';

export interface IAbstractCorrelatorConfigurationT {
  integrationDuration: ITimeT;
  channelAverageDuration: ITimeT;
  enable180DegreeWalshFunction: boolean;
  enable90DegreeWalshFunction: boolean;
  aPCDataSets: string;
  cAM: string;
  lOOffsettingMode: string;
}
