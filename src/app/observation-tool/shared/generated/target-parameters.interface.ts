import {IAbstractTargetParametersT, IFieldTUnion} from './test';

export interface ITargetParametersT extends IAbstractTargetParametersT {
  '@type': 'TargetParametersT';
  isMosaic: boolean;
  fields: IFieldTUnion[];
  type: string;
}
