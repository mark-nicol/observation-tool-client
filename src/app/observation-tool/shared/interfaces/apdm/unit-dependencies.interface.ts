import {Time} from '../../../../units/classes/time';

export interface IUnitDependencies {
  executionCount: number;
  delay: Time;
  expression: string;
}
