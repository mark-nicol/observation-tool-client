// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IFieldTUnion} from './test';
import {IAbstractTargetParameters} from './abstract-target-parameters.interface';

export interface ITargetParameters extends IAbstractTargetParameters {
  '@type': 'TargetParametersT';
  isMosaic: boolean;
  fields: IFieldTUnion[];
  type: string;
}
