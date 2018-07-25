// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractScienceGoal} from './abstract-science-goal.interface';
import {IOpticalCameraSpecParameters} from './optical-camera-spec-parameters.interface';
import {IOpticalCameraControlParameters} from './optical-camera-control-parameters.interface';
import {IOpticalPointingTargetParameters} from './optical-pointing-target-parameters.interface';
import {IOpticalPointingTargetQueryParameters} from './optical-pointing-target-query-parameters.interface';

export interface IOpticalPointingScienceGoal extends IAbstractScienceGoal {
  '@type': 'OpticalPointingScienceGoalT';
  filename: string;
  schedBlockName: string;
  opticalCameraControl: IOpticalCameraControlParameters;
  opticalCameraSpec: IOpticalCameraSpecParameters;
  OpticalPointingTargetParameters: IOpticalPointingTargetParameters[];
  OpticalPointingTargetQueryParameters: IOpticalPointingTargetQueryParameters;
}
