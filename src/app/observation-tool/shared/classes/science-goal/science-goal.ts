import {ICalibrationSetupParameters} from '../../interfaces/project/science-goal/calibration-setup-parameters.interface';
import {IPerformanceParameters} from '../../interfaces/project/science-goal/performance-parameters.interface';
import {IScienceGoal} from '../../interfaces/project/science-goal/sciencegoal.interface';
import {ISpectralSetupParameters} from '../../interfaces/project/science-goal/spectral-setup-parameters-interface';
import {ITargetParameters} from '../../interfaces/project/science-goal/target-parameters.interface';
import {ITechnicalJustification} from '../../interfaces/project/science-goal/technical-justification.interface';

export class ScienceGoal implements IScienceGoal {
  name: string;
  note: string;
  estimatedTotalTime: number;
  userPriority: number;
  requiredReceiverBands: string;
  estimated12mTime: number;
  estimated7mTime: number;
  estimatedTPTime: number;
  estimatedACATime: number;
  mode: string;
  isDescoped: boolean;
  isResubmission: boolean;
  resubmissionOfOusStatusUid: string;
  resubmissionOfName: string;
  CalibrationSetupParameters: ICalibrationSetupParameters;
  PerformanceParameters: IPerformanceParameters;
  SpectralSetupParameters: ISpectralSetupParameters;
  TargetParameters: ITargetParameters[];
  TechnicalJustifications: ITechnicalJustification[];

  initFromJson(json: any): ScienceGoal {
    this.name = json['prj:name'];
    this.note = json['prj:note'];
    return this;
  }

}
