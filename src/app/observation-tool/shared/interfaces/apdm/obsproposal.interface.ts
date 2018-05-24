import {IEntity, IEntityRef, IObsPlan, IVelocity} from './obsproject.interface';
import {Time} from '../../../../units/classes/time';
import {StorageVolume} from '../../../../units/classes/storage-volume';
import {DataRate} from '../../../../units/classes/data-rate';
import {UserAngle} from '../../../../units/classes/user-angle';
import {Angle} from '../../../../units/classes/angle';
import {UserSensitivity} from '../../../../units/classes/user-sensitivity';
import {Frequency} from '../../../../units/classes/frequency';
import {UserFrequency} from '../../../../units/classes/user-frequency';
import {AngularVelocity} from '../../../../units/classes/angular-velocity';
import {Longitude} from '../../../../units/classes/longitude';
import {Latitude} from '../../../../units/classes/latitude';
import {Flux} from '../../../../units/classes/flux';

export interface IObsProposal {
  obsProposalEntity: IEntity;
  documentsRef: IEntityRef;
  obsProjectRef: IEntityRef;
  _abstract: string;
  relatedProposals: string;
  previousProposals: string;
  dateReceived: IDate;
  cycle: string;
  studentProject: boolean;
  continuation: boolean;
  scientificCategoryCode: string;
  proposalTypeCode: string;
  scientificCategoryString: string;
  proposalTypeString: string;
  keyword?: (string)[] | null;
  keywordCode?: (string)[] | null;
  principalInvestigator: IInvestigator;
  coInvestigator?: (IInvestigator)[] | null;
  proposalFeedback: ProposalFeedback;
  schemaVersion: string;
  revision: string;
  almatype: string;
  scienceGoals?: (IScienceGoal)[] | null;
  obsPlan: IObsPlan;
}

export interface IDate {
  year: number;
  month: number;
  day: number;
  timezone: number;
  hour: number;
  minute: number;
  second: number;
  fractionalSecond: number;
}

export interface IInvestigator {
  fullName: string;
  organisation: string;
  eMail: string;
  verfiedUser: boolean;
  userId: string;
  telephone: string;
  mobile: string;
  index: number;
  organisationId: string;
  allowedExec: string;
  associatedExec: string;
}

export interface ProposalFeedback {
  estimatedTotalIntegrationTime: Time;
  arrayTimeBreakdown: IArrayTimeBreakdown;
  dataRateBreakdown: IDataRateBreakdown;
  receiverTimeBreakdown: IReceiverTimeBreakdown;
  timeAllocationBreakdown: ITimeAllocationBreakdown;
}

export interface IArrayTimeBreakdown {
  arrayTime?: (IArrayTime)[] | null;
}

export interface IArrayTime {
  estimatedTime: Time;
  arrayName: string;
}

export interface IDataRateBreakdown {
  arrayDataRates?: (IArrayDataRates)[] | null;
}

export interface IArrayDataRates {
  estimatedAverageDataRate: DataRate;
  estimatedMaximumDataRate: DataRate;
  estimatedDataVolume: StorageVolume;
  arrayName: string;
}

export interface IReceiverTimeBreakdown {
  receiverTime?: (IReceiverTime)[] | null;
}

export interface IReceiverTime {
  time: Time;
  receiverBand: string;
}

export interface ITimeAllocationBreakdown {
  executiveFraction?: (IExecutiveFraction)[] | null;
}

export interface IExecutiveFraction {
  timeFraction: number;
  name: string;
}

export interface IScienceGoal {
  estimatedTotalTime: Time;
  userPriority: number;
  requiredReceiverBands?: (string)[] | null;
  estimated12MTime: Time;
  estimated7MTime: Time;
  estimatedTPTime: Time;
  estimatedACATime: Time;
  isDescoped: boolean;
  calibrationSetupParameters: ICalibrationSetupParameters;
  performanceParameters: IPerformanceParameters;
  spectralSetupParameters: ISpectralSetupParameters;
  targetParameters?: (ITargetParameters)[] | null;
  technicalJustification?: (ITechnicalJustification)[] | null;
  mode: string;
  name: string;
  note: string;
}

export interface ICalibrationSetupParameters {
  selection: string;
}

export interface IPerformanceParameters {
  desiredAngularResolution: UserAngle;
  desiredLargestScale: Angle;
  desiredSensitivity: UserSensitivity;
  desiredDynamicRange: number;
  representativeFrequency?: Frequency | null;
  useACA: boolean;
  isTimeConstrained: boolean;
  useTP: boolean;
  desiredSDSensitivity?: UserSensitivity | null;
  isPointSource: boolean;
  desiredSensitivityReferenceFrequencyWidth: UserFrequency;
  needsMoreTime: boolean;
  desiredACASensitivity?: UserSensitivity | null;
  desiredTPSensitivity?: UserSensitivity | null;
  isScheduleConstrained?: boolean;
  desiredTime?: Time | null;
  desiredSensitivityFrequencyMeasure: string;
}

export interface DesiredAngularResolutionOrDesiredSensitivityOrDesiredSDSensitivityOrDesiredSensitivityReferenceFrequencyWidthOrDesiredACASensitivityOrDesiredTPSensitivityOrBandWidthOrSpectralResolutionOrSpacingOrExpectedLineWidth {
  userUnit: string;
  value: number;
  unit: string;
}

export interface ISpectralSetupParameters {
  representativeFrequency: Frequency;
  userRepresentativeFrequency: boolean;
  singleContinuumFrequency?: Frequency | null;
  spectralWindows?: (ISpectralWindow)[] | null;
  polarisation: string;
  type: string;
}

export interface ISpectralWindow {
  transitionName: string;
  centerFrequency: Frequency;
  bandWidth: UserFrequency;
  spectralResolution: UserFrequency;
  groupIndex: number;
  isSkyFrequency: boolean;
  splatalogId?: number | null;
  representativeWindow: boolean;
  groupResourceUse: string;
  index: number;
  advancedWindowSetup: IAdvancedWindowSetup;
}

export interface IAdvancedWindowSetup {
  smoothingFactor: number;
  oversampling: boolean;
  addedSensitivity: boolean;
  useImage: boolean;
  useThis: boolean;
  smoothingFunction: string;
}

export interface ITargetParameters {
  isMosaic: boolean;
  circleOrEllipseOrPolygon?: (IField)[] | null;
  type: string;
  sourceName: string;
  sourceCoordinates: ISkyCoordinates;
  pmRA: AngularVelocity;
  pmDec: AngularVelocity;
  parallax: Angle;
  nonSiderealMotion: boolean;
  sourceEphemeris: string;
  sourceVelocity: IVelocity;
  index: number;
  expectedProperties: IExpectedProperties;
  solarSystemObject: string;
}

export interface IField {
  name: string;
  centre: ISkyCoordinates;
}

// noinspection TsLint
export interface ISinglePoint extends IField {

}

export interface IRectangle extends IField {
  paLong: Angle;
  _long: Angle;
  _short: Angle;
  spacing: UserAngle;
  referenceFrequency: Frequency;
}

export interface ISkyCoordinates {
  longitude: Longitude;
  latitude: Latitude;
  fieldName: string;
  system: string;
  type: string;
}

export interface IExpectedProperties {
  expectedPeakFluxDensity: Flux;
  desiredPolarizationPercentage: number;
  expectedLineWidth: UserFrequency;
  referenceFrequency: Frequency;
  expectedPeakLineFluxDensity: Flux;
  expectedSpectralDynamicRange: number;
  expectedImageDynamicRange: number;
  desiredLinePolarizationPercentage: number;
  desiredLineCircularPolarizationPercentage: number;
  desiredCircularPolarizationPercentage: number;
  solarActivityLevel: string;
}

export interface ITechnicalJustification {
  justificationText: string;
  justificationKey: string;
}
