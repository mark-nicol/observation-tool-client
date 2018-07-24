// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractScienceGoal} from './abstract-science-goal.interface';
import {
  IOpticalPointingTargetQueryParametersT
} from '../optical-pointing-target-query-parameters.interface';
import {IOpticalCameraControlParametersT} from '../optical-camera-control-parameters.interface';
import {IOpticalCameraSpecParametersT} from '../optical-camera-spec-parameters.interface';
import {IOpticalPointingTargetParametersT} from '../optical-pointing-target-parameters.interface';

export interface IOpticalPointingScienceGoal extends IAbstractScienceGoal {
  '@type': 'OpticalPointingScienceGoalT';
  filename: string;
  schedBlockName: string;
  opticalCameraControl: IOpticalCameraControlParametersT;
  opticalCameraSpec: IOpticalCameraSpecParametersT;
  OpticalPointingTargetParameters: IOpticalPointingTargetParametersT[];
  OpticalPointingTargetQueryParameters: IOpticalPointingTargetQueryParametersT;
}
