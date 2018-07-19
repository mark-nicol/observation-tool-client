import {IFieldTUnion} from './test';
import {IAbstractTargetParametersT} from './abstract-target-parameters.interface';

export interface ITargetParametersT extends IAbstractTargetParametersT {
  '@type': 'TargetParametersT';
  isMosaic: boolean;
  fields: IFieldTUnion[];
  type: string;
}
