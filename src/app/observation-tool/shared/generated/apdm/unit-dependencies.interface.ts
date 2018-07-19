import {ITimeT} from '../test';

export interface IUnitDependenciesT {
  executionCount: number;
  delay: ITimeT;
  expression: string;
  dependencyList: string[];
  margin: ITimeT;
}
