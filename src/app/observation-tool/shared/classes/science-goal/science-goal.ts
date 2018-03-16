import {ICalibrationSetupParameters} from '../../interfaces/project/science-goal/calibration-setup-parameters.interface';
import {IPerformanceParameters} from '../../interfaces/project/science-goal/performance-parameters.interface';
import {IScienceGoal} from '../../interfaces/project/science-goal/sciencegoal.interface';
import {ISpectralSetupParameters} from '../../interfaces/project/science-goal/spectral-setup-parameters-interface';
import {ITargetParameters} from '../../interfaces/project/science-goal/target-parameters.interface';
import {ITechnicalJustification} from '../../interfaces/project/science-goal/technical-justification.interface';
import {CalibrationSetupParameters} from './calibration-setup-parameters';
import {PerformanceParameters} from './performance-parameters';
import {SpectralSetupParameters} from './spectral-setup-parameters';
import {TargetParameters} from './target-parameters';

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
  TargetParameters: TargetParameters[];
  TechnicalJustifications: ITechnicalJustification[];


  constructor(name?: string,
              note?: string,
              estimatedTotalTime?: number,
              userPriority?: number,
              requiredReceiverBands?: string,
              estimated12mTime?: number,
              estimated7mTime?: number,
              estimatedTPTime?: number,
              estimatedACATime?: number,
              mode?: string,
              isDescoped?: boolean,
              isResubmission?: boolean,
              resubmissionOfOusStatusUid?: string,
              resubmissionOfName?: string,
              calibrationSetupParameters?: ICalibrationSetupParameters,
              performanceParameters?: IPerformanceParameters,
              spectralSetupParameters?: ISpectralSetupParameters,
              targetParameters?: TargetParameters[],
              TechnicalJustifications?: ITechnicalJustification[]) {
    this.name                       = name;
    this.note                       = note;
    this.estimatedTotalTime         = estimatedTotalTime;
    this.userPriority               = userPriority;
    this.requiredReceiverBands      = requiredReceiverBands;
    this.estimated12mTime           = estimated12mTime;
    this.estimated7mTime            = estimated7mTime;
    this.estimatedTPTime            = estimatedTPTime;
    this.estimatedACATime           = estimatedACATime;
    this.mode                       = mode;
    this.isDescoped                 = isDescoped;
    this.isResubmission             = isResubmission;
    this.resubmissionOfOusStatusUid = resubmissionOfOusStatusUid;
    this.resubmissionOfName         = resubmissionOfName;
    this.CalibrationSetupParameters = calibrationSetupParameters;
    this.PerformanceParameters      = performanceParameters;
    this.SpectralSetupParameters    = spectralSetupParameters;
    this.TargetParameters           = targetParameters;
    this.TechnicalJustifications    = TechnicalJustifications;
  }

}
