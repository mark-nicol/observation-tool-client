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
  TargetParameters: ITargetParameters[];
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
              TargetParameters?: ITargetParameters[],
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
    this.TargetParameters           = TargetParameters;
    this.TechnicalJustifications    = TechnicalJustifications;
  }

  initFromJson(json: any): ScienceGoal {
    Object.keys(this).forEach(key => {
      if (json['prj:' + key] !== undefined) {
        this[key] = json['prj:' + key];
      } else if (json['prp:' + key] !== undefined) {
        this[key] = json['prp:' + key];
      } else {
        this[key] = json[key];
      }
    });
    this.CalibrationSetupParameters = new CalibrationSetupParameters().initFromJson(json['prj:CalibrationSetupParameters']);
    this.PerformanceParameters = new PerformanceParameters().initFromJson(json['prj:PerformanceParameters']);
    this.SpectralSetupParameters = new SpectralSetupParameters().initFromJson(json['prj:SpectralSetupParameters']);
    this.TargetParameters = json['prj:TargetParameters'].map(item => new TargetParameters().initFromJson(item));
    return this;
  }

}
