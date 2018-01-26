import {Angle} from '../../../../units/classes/angle';
import {Frequency} from '../../../../units/classes/frequency';
import {Sensitivity} from '../../../../units/classes/sensitivity';
import {IPerformanceParameters} from '../../interfaces/project/science-goal/performance-parameters.interface';

export class PerformanceParameters implements IPerformanceParameters {

  desiredAngularResolution: Angle;
  desiredLargestScale: Angle;
  desiredSensitivity: Sensitivity;
  desiredDynamicRange: number;
  representativeFrequency: Frequency;
  useACA: boolean;
  isTimeConstrained: boolean;
  useTP: boolean;
  desiredSDSensitivity: Sensitivity;
  isPointSource: boolean;
  desiredSensitivityReferenceFrequencyWidth: Frequency;
  desiredSensitivityFrequencyMeasure: string;
  needsMoreTime: boolean;
  desiredACASensitivity: Sensitivity;
  desiredTPSensitivity: Sensitivity;
  isScheduleConstrained: boolean;
  desiredTime: string;
  timingConstraintsType: string;
  acceptableAngularResolution: Angle;
  resolutionOption: string;
  isSimultaneous12and7: boolean;


  constructor(desiredAngularResolution?: Angle,
              desiredLargestScale?: Angle,
              desiredSensitivity?: Sensitivity,
              desiredDynamicRange?: number,
              representativeFrequency?: Frequency,
              useACA?: boolean,
              isTimeConstrained?: boolean,
              useTP?: boolean,
              desiredSDSensitivity?: Sensitivity,
              isPointSource?: boolean,
              desiredSensitivityReferenceFrequencyWidth?: Frequency,
              desiredSensitivityFrequencyMeasure?: string,
              needsMoreTime?: boolean,
              desiredACASensitivity?: Sensitivity,
              desiredTPSensitivity?: Sensitivity,
              isScheduleConstrained?: boolean,
              desiredTime?: string,
              timingConstraintsType?: string,
              acceptableAngularResolution?: Angle,
              resolutionOption?: string,
              isSimultaneous12and7?: boolean) {
    this.desiredAngularResolution                  = desiredAngularResolution;
    this.desiredLargestScale                       = desiredLargestScale;
    this.desiredSensitivity                        = desiredSensitivity;
    this.desiredDynamicRange                       = desiredDynamicRange;
    this.representativeFrequency                   = representativeFrequency;
    this.useACA                                    = useACA;
    this.isTimeConstrained                         = isTimeConstrained;
    this.useTP                                     = useTP;
    this.desiredSDSensitivity                      = desiredSDSensitivity;
    this.isPointSource                             = isPointSource;
    this.desiredSensitivityReferenceFrequencyWidth = desiredSensitivityReferenceFrequencyWidth;
    this.desiredSensitivityFrequencyMeasure        = desiredSensitivityFrequencyMeasure;
    this.needsMoreTime                             = needsMoreTime;
    this.desiredACASensitivity                     = desiredACASensitivity;
    this.desiredTPSensitivity                      = desiredTPSensitivity;
    this.isScheduleConstrained                     = isScheduleConstrained;
    this.desiredTime                               = desiredTime;
    this.timingConstraintsType                     = timingConstraintsType;
    this.acceptableAngularResolution               = acceptableAngularResolution;
    this.resolutionOption                          = resolutionOption;
    this.isSimultaneous12and7                      = isSimultaneous12and7;
  }

  initFromJson(json: any) {
    Object.keys(this).forEach(key => {
      if (json['prj:' + key] !== undefined) {
        this[key] = json['prj:' + key];
      } else if (json['prp:' + key] !== undefined) {
        this[key] = json['prp:' + key];
      } else {
        this[key] = json[key];
      }
    });
    return this;
  }

}
