/* tslint:disable */
// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObsProposal} from './apdm/obsproposal.interface';
import {IObsAttachmentRefT, ISchedBlockRefT} from './apdm/entity-ref.interface';
import {IObsProgramT} from './apdm/obs-program.interface';
import {IObsUnitSetT} from './apdm/obs-unit-set.interface';
import {IObservatoryGoalT} from './apdm/observatory-goal.interface';
import {IOpticalPointingScienceGoalT} from './apdm/optical-pointing-science-goal.interface';
import {IScienceGoal} from './apdm/science-goal.interface';
import {IObsReview} from './apdm/obs-review.interface';
import {ITargetParametersT} from './target-parameters.interface';
import {IVelocityT} from './velocity.interface';
import {ISchedBlock} from './sched-block.interface';
import {ISkyCoordinatesT} from './sky-coordinates.interface';
import {IAbstractScienceSpectralWindowT} from './abstract-science-spectral-window.interface';

export interface ITimeT extends IDoubleWithUnitT {
}

export interface IDoubleWithUnitT {
    value: number;
    unit: string;
}

export interface IAngleT extends IDoubleWithUnitT {
}

export interface ITemperatureT extends IDoubleWithUnitT {
}

export interface ISensitivityT extends IDoubleWithUnitT {
}

export interface IDataRateT extends IDoubleWithUnitT {
}

export interface IStorageVolumeT extends IDoubleWithUnitT {
}

export interface IFluxT extends IDoubleWithUnitT {
}

export interface IFrequencyT extends IDoubleWithUnitT {
}

export interface IAdvancedSpectralSetupT {
    sideBandSeparation: boolean;
    fastMode: boolean;
}

export interface IOverlaidSpectralLineT extends IAbstractSpectralLineT {
}

export interface IMagnitudeT {
    value: number;
}

export interface IAngularVelocityT extends IDoubleWithUnitT {
}

export interface IUserAngleT extends IAngleT {
    userUnit: string;
}

export interface IUserSensitivityT extends ISensitivityT {
    userUnit: string;
}

export interface IUserFrequencyT extends IFrequencyT {
    userUnit: string;
}

export interface IMonitoringConstraintT extends IAbstractTimingConstraintsT {
    monitoringLength: ITimeT;
    cycleTime: ITimeT;
    requiredDelay: ITimeT;
}

export interface ITemporalParametersT extends IAbstractTimingConstraintsT {
}

export interface IVisitConstraintT extends IAbstractTimingConstraintsT {
    visitId: number;
    previousVisitId: number;
    requiredDelay: ITimeT;
}

export interface IFieldT {
    "@type": "CircleT" | "PolygonT" | "EllipseT" | "RectangleT" | "SinglePointT";
    name: string;
    centre: ISkyCoordinatesT;
}

export interface IExpectedPropertiesT {
    expectedPeakFluxDensity: IFluxT;
    desiredPolarizationPercentage: number;
    expectedLineWidth: IUserFrequencyT;
    referenceFrequency: IFrequencyT;
    expectedPeakLineFluxDensity: IFluxT;
    expectedSpectralDynamicRange: number;
    expectedImageDynamicRange: number;
    desiredLinePolarizationPercentage: number;
    desiredLineCircularPolarizationPercentage: number;
    desiredCircularPolarizationPercentage: number;
    solarActivityLevel: string;
}

export interface IAbstractTargetParametersT {
    "@type": "TargetParametersT";
    sourceName: string;
    sourceCoordinates: ISkyCoordinatesT;
    pmRA: IAngularVelocityT;
    pmDec: IAngularVelocityT;
    parallax: IAngleT;
    nonSiderealMotion: boolean;
    sourceEphemeris: string;
    sourceVelocity: IVelocityT;
    ephemerisFileName: string;
    index: number;
    sdReferencePosition: ISkyCoordinatesT[];
    ExpectedProperties: IExpectedPropertiesT;
    ImageRef: IObsAttachmentRefT;
    solarSystemObject: string;
}

export interface ISpeedT extends IDoubleWithUnitT {
}

export interface IKeywordValueT {
    Keyword: string;
    Value: string;
}

export interface IOpticalCameraSpecT extends IAbstractInstrumentSpecT {
    minIntegrationTime: ITimeT;
    filter: string;
}

export interface ISpectralSpecT extends IAbstractInstrumentSpecT {
    ACACorrelatorConfiguration: IACACorrelatorConfigurationT;
    BLCorrelatorConfiguration: IBLCorrelatorConfigurationT;
    BeamSwitchingCycle: IBeamSwitchingCycleT;
    FrequencySwitchingCycle: IFrequencySwitchingCycleT;
    FrequencySetup: IFrequencySetupT;
    SquareLawSetup: ISquareLawSetupT;
    switchingType: string;
    receiverType: string;
}

export interface IFieldSourceT {
    entityPartId: string;
    sourceCoordinates: ISkyCoordinatesT;
    sourceName: string;
    sourceVelocity: IVelocityT;
    sourceEphemeris: string;
    pMRA: IAngularVelocityT;
    pMDec: IAngularVelocityT;
    nonSiderealMotion: boolean;
    parallax: IAngleT;
    name: string;
    isQuery: boolean;
    ephemerisFileName: string;
    CrossPattern: ICrossPatternT;
    FillPattern: IFillPatternT;
    PointingPattern: IPointingPatternT;
    RectanglePattern: IRectanglePatternT;
    QuerySource: IQuerySourceT;
    Reference: IReferenceT[];
    SourceProperty: ISourcePropertyT[];
    ImageRef: IObsAttachmentRefT;
    almatype: string;
    solarSystemObject: string;
}

export interface IObservingGroupT {
    index: number;
    name: string;
    OrderedTarget: IOrderedTargetT[];
    mainTargetRef: ISchedBlockRefT;
}

export interface IObservingParametersT {
    "@type": "HolographyParametersT" | "ScienceParametersT" | "OpticalPointingParametersT" | "RadiometricPointingParametersT" | "ReservationParametersT" | "CalibratorParametersT";
    entityPartId: string;
    name: string;
    expertParameter: IKeywordValueT[];
    almatype: string;
}

export interface IObsProcedureT {
    obsProcScript: string;
}

export interface IPreconditionsT {
    baselineCalValid: boolean;
    polarizationCalValid: boolean;
    minAllowedHA: IUserAngleT;
    maxAllowedHA: IUserAngleT;
    WeatherConstraints: IWeatherConstraintsT;
}

export interface ISchedBlockControlT {
    sBMaximumTime: ITimeT;
    indefiniteRepeat: boolean;
    executionCount: number;
    runQuicklook: boolean;
}

export interface ISchedulingConstraintsT {
    representativeFrequency: IFrequencyT;
    minAcceptableAngResolution: IAngleT;
    maxAcceptableAngResolution: IAngleT;
    dynamicRange: number;
    representativeCoordinates: ISkyCoordinatesT;
    requiredReceiverBands: string[];
    nominalConfiguration: string[];
    scienceGoalDesiredResolution: IAngleT;
    scienceGoalLargestAngularScale: IAngleT;
    isSimultaneous: boolean;
    simultaneousSbUid: string[];
    representativeTargetRef: ISchedBlockRefT;
    representativeReceiverBand: string;
}

export interface ITargetT {
    entityPartId: string;
    AbstractInstrumentSpecRef: ISchedBlockRefT;
    FieldSourceRef: ISchedBlockRefT;
    observingParametersRef: ISchedBlockRefT[];
    almatype: string;
}

export interface ITemporalConstraintsT {
    startTime: string;
    endTime: string;
    allowedMargin: ITimeT;
}

export interface ILongitudeT extends IDoubleWithUnitT {
}

export interface ILatitudeT extends IDoubleWithUnitT {
}

export interface IAdvancedWindowSetupT {
    smoothingFactor: number;
    oversampling: boolean;
    addedSensitivity: boolean;
    useImage: boolean;
    useThis: boolean;
    smoothingFunction: string;
}

export interface IExpectedSpectralLineT extends IAbstractSpectralLineT {
}

export interface ISpectralScanT extends IAbstractScienceSpectralWindowT {
    "@type": "SpectralScanT";
    startFrequency: IFrequencyT;
    endFrequency: IFrequencyT;
    bandWidth: IUserFrequencyT;
    spectralResolution: IFrequencyT;
    isSkyFrequency: boolean;
}

export interface IScienceSpectralWindowT extends IAbstractScienceSpectralWindowT {
    "@type": "ScienceSpectralWindowT";
    transitionName: string;
    centerFrequency: IFrequencyT;
    bandWidth: IUserFrequencyT;
    spectralResolution: IUserFrequencyT;
    groupIndex: number;
    isSkyFrequency: boolean;
    splatalogId: number;
    representativeWindow: boolean;
    groupResourceUse: string;
}

export interface IAbstractSpectralLineT {
    restFrequency: IFrequencyT;
    transition: string;
    spatalogId: string;
    description: string;
}

export interface IAbstractTimingConstraintsT {
    startTime: string;
    endTime: string;
    allowedMargin: ITimeT;
    repeats: number;
    lSTMin: string;
    lSTMax: string;
    note: string;
    isAvoidConstraint: boolean;
    priority: number;
    isFixedStart: boolean;
}

export interface ICircleT extends IFieldT {
    "@type": "CircleT";
    radius: IAngleT;
    spacing: IUserAngleT;
}

export interface IPolygonT extends IFieldT {
    "@type": "PolygonT";
    points: ISkyCoordinatesT[];
}

export interface IEllipseT extends IFieldT {
    "@type": "EllipseT";
    semiMajor: IAngleT;
    semiMinor: IAngleT;
    pAMajor: IAngleT;
    spacing: IUserAngleT;
}

export interface IRectangleT extends IFieldT {
    "@type": "RectangleT";
    pALong: IAngleT;
    long: IAngleT;
    short: IAngleT;
    spacing: IUserAngleT;
    referenceFrequency: IFrequencyT;
}

export interface ISinglePointT extends IFieldT {
    "@type": "SinglePointT";
}

export interface IAbstractInstrumentSpecT {
    entityPartId: string;
    name: string;
    almatype: string;
}

export interface IACACorrelatorConfigurationT extends IAbstractCorrelatorConfigurationT {
    ACABaseBandConfig: IACABaseBandConfigT[];
    ACAPhaseSwitchingConfiguration: IACAPhaseSwitchingConfigurationT;
}

export interface IBLCorrelatorConfigurationT extends IAbstractCorrelatorConfigurationT {
    dumpDuration: ITimeT;
    BLBaseBandConfig: IBLBaseBandConfigT[];
}

export interface IBeamSwitchingCycleT extends IAbstractSwitchingCycleT {
    BeamSwitchingState: IBeamSwitchingStateT[];
    mode: string;
}

export interface IFrequencySwitchingCycleT extends IAbstractSwitchingCycleT {
    FrequencySwitchingState: IFrequencySwitchingStateT[];
}

export interface IFrequencySetupT {
    restFrequency: IFrequencyT;
    transitionName: string;
    lO1Frequency: IFrequencyT;
    isUserSpecifiedLO1: boolean;
    hasHardwareSetup: boolean;
    floog: IFrequencyT;
    tuneHigh: boolean;
    BaseBandSpecification: IBaseBandSpecificationT[];
    receiverBand: string;
    dopplerReference: string;
}

export interface ISquareLawSetupT {
    integrationDuration: ITimeT;
}

export interface ICrossPatternT extends IFieldPatternT {
    "@type": "CrossPatternT";
    patternCenterCoordinates: ISkyCoordinatesT;
    longitudeLength: IAngleT;
    latitudeLength: IAngleT;
    scanVelocity: IAngularVelocityT;
    orientation: IAngleT;
    initialScanDirection: string;
}

export interface IFillPatternT extends IFieldPatternT {
    "@type": "FillPatternT";
    patternCenterCoordinates: ISkyCoordinatesT;
    longitudeLength: IAngleT;
    latitudeLength: IAngleT;
    samplingLength: IAngleT;
    orientation: IAngleT;
    patternType: string;
    patternSubtype: string;
    scanningCoordinateSystem: string;
}

export interface IPointingPatternT extends IFieldPatternT {
    "@type": "PointingPatternT";
    phaseCenterCoordinates: ISkyCoordinatesT[];
    isMosaic: boolean;
}

export interface IRectanglePatternT extends IFieldPatternT {
    "@type": "RectanglePatternT";
    patternCenterCoordinates: ISkyCoordinatesT;
    longitudeLength: IAngleT;
    latitudeLength: IAngleT;
    orthogonalStep: IAngleT;
    orientation: IAngleT;
    uniDirectionalScan: boolean;
    scanDirection: string;
    scanningCoordinateSystem: string;
}

export interface IQuerySourceT {
    queryCenter: ISkyCoordinatesT;
    searchRadius: IAngleT;
    minFrequency: IFrequencyT;
    maxFrequency: IFrequencyT;
    minFlux: IFluxT;
    maxFlux: IFluxT;
    minTimeSinceObserved: ITimeT;
    maxTimeSinceObserved: ITimeT;
    use: string;
    maxSources: number;
    intendedUse: string;
}

export interface IReferenceT {
    referenceCoordinates: ISkyCoordinatesT;
    integrationTime: ITimeT;
    cycleTime: ITimeT;
    subScanDuration: ITimeT;
}

export interface ISourcePropertyT {
    sourceFrequency: IFrequencyT;
    sourceFluxI: IFluxT;
    sourceDiameter: IAngleT;
    sourceFluxQ: IFluxT;
    sourceFluxU: IFluxT;
    sourceFluxV: IFluxT;
    visibleMagnitude: IMagnitudeT;
    dateOfMeasurement: string;
}

export interface IOrderedTargetT {
    index: number;
    TargetRef: ISchedBlockRefT;
}

export interface IHolographyParametersT extends IObservingParametersT {
    "@type": "HolographyParametersT";
    frequency: IFrequencyT;
    startFraction: number;
    speed: IAngularVelocityT;
    rowsCal: number;
    calTime: ITimeT;
    nRows: number;
    rowSize: IAngleT;
    uniDirectionalScan: boolean;
    towerName: string;
    scanDirection: string;
    calMode: string;
}

export interface IScienceParametersT extends IObservingParametersT {
    "@type": "ScienceParametersT";
    representativeBandwidth: IFrequencyT;
    representativeFrequency: IFrequencyT;
    sensitivityGoal: ISensitivityT;
    integrationTime: IIntTimeSourceT;
    subScanDuration: ITimeT;
    forceAtmCal: boolean;
}

export interface IOpticalPointingParametersT extends IObservingParametersT {
    "@type": "OpticalPointingParametersT";
    antennaPositionTolerance: IAngleT;
    elevationLimit: IAngleT;
    maxMagnitude: IMagnitudeT;
    minMagnitude: IMagnitudeT;
    randomizeOrder: boolean;
}

export interface IRadiometricPointingParametersT extends IObservingParametersT {
    "@type": "RadiometricPointingParametersT";
    antennaPositionTolerance: IAngleT;
    elevationLimit: IAngleT;
    maxFlux: IFluxT;
    minFlux: IFluxT;
    randomizeOrder: boolean;
}

export interface IReservationParametersT extends IObservingParametersT {
    "@type": "ReservationParametersT";
    calendarId: string;
    reqId: string;
    staffMember: string;
    resourceList: string[];
    description: string;
    summary: string;
    reason: string;
}

export interface ICalibratorParametersT extends IObservingParametersT {
    "@type": "CalibratorParametersT";
    cycleTime: ITimeT;
    defaultIntegrationTime: ITimeT;
    subScanDuration: ITimeT;
    forceAtmCal: boolean;
    forceExecution: boolean;
    dataOrigin: string;
}

export interface IWeatherConstraintsT {
    maxPWVC: ILengthT;
    seeing: IAngleT;
    phaseStability: IAngleT;
    maxWindVelocity: ISpeedT;
}

export interface IACABaseBandConfigT extends IAbstractBaseBandConfigT {
    centerFreqOfResidualDelay: IFrequencyT;
    ACASpectralWindow: IACASpectralWindowT[];
}

export interface IACAPhaseSwitchingConfigurationT {
    doD180modulation: boolean;
    doD180demodulation: boolean;
}

export interface IAbstractCorrelatorConfigurationT {
    integrationDuration: ITimeT;
    channelAverageDuration: ITimeT;
    enable180DegreeWalshFunction: boolean;
    enable90DegreeWalshFunction: boolean;
    aPCDataSets: string;
    cAM: string;
    lOOffsettingMode: string;
}

export interface IBLBaseBandConfigT extends IAbstractBaseBandConfigT {
    BLSpectralWindow: IBLSpectralWindowT[];
}

export interface IBeamSwitchingStateT extends IAbstractSwitchingStateT {
    position: IAngleT;
    transition: ITimeT;
}

export interface IAbstractSwitchingCycleT {
    numberOfPositions: number;
    dwellTime: ITimeT;
}

export interface IFrequencySwitchingStateT extends IAbstractSwitchingStateT {
    offset: IFrequencyT;
}

export interface IBaseBandSpecificationT {
    entityPartId: string;
    centerFrequency: IFrequencyT;
    frequencySwitching: boolean;
    lO2Frequency: IFrequencyT;
    weighting: number;
    useUSB: boolean;
    use12GHzFilter: boolean;
    imageCenterFrequency: IFrequencyT;
    imageWeighting: number;
    almatype: string;
    baseBandName: string;
    sideBandPreference: string;
}

export interface IFieldPatternT {
    "@type": "CrossPatternT" | "FillPatternT" | "PointingPatternT" | "RectanglePatternT";
    type: string;
}

export interface IIntTimeSourceT extends IDoubleWithUnitT {
}

export interface ILengthT extends IDoubleWithUnitT {
}

export interface IACASpectralWindowT extends IAbstractSpectralWindowT {
    frqChProfReproduction: boolean;
    ChannelAverageRegion: IChannelAverageRegionT[];
    synthProf: string;
}

export interface IAbstractBaseBandConfigT {
    BaseBandSpecificationRef: ISchedBlockRefT;
    dataProducts: string;
}

export interface IBLSpectralWindowT extends IAbstractSpectralWindowT {
    correlationNyquistOversampling: boolean;
    quantizationCorrection: boolean;
    ChannelAverageRegion: IChannelAverageRegionT[];
    correlationBits: string;
}

export interface IAbstractSwitchingStateT {
    dwellTime: ITimeT;
    bin: number;
}

export interface IChannelAverageRegionT {
    startChannel: number;
    numberChannels: number;
}

export interface ISpectralLineT {
    restFrequency: IFrequencyT;
    transition: string;
    spatalogId: string;
}

export interface IAbstractSpectralWindowT {
    centerFrequency: IFrequencyT;
    spectralAveragingFactor: number;
    name: string;
    effectiveBandwidth: IFrequencyT;
    effectiveNumberOfChannels: number;
    associatedSpectralWindowNumberInPair: number;
    useThisSpectralWindow: boolean;
    desiredCenterFrequency: IFrequencyT;
    SpectralLine: ISpectralLineT[];
    sideBand: string;
    windowFunction: string;
    polnProducts: string;
}

export type IAbstractScienceGoalTUnion = IObservatoryGoalT | IOpticalPointingScienceGoalT | IScienceGoal;

export type IObsPhaseTUnion = IObsProgramT | IObsReview | IObsProposal;

export type IObsUnitTUnion = IObsUnitSetT | ISchedBlock;

export type IAbstractScienceSpectralWindowTUnion = ISpectralScanT | IScienceSpectralWindowT;

export type IFieldTUnion = ICircleT | IPolygonT | IEllipseT | IRectangleT | ISinglePointT;

export type IAbstractTargetParametersTUnion = ITargetParametersT;

export type IObservingParametersTUnion = IHolographyParametersT | IScienceParametersT | IOpticalPointingParametersT | IRadiometricPointingParametersT | IReservationParametersT | ICalibratorParametersT;

export type IFieldPatternTUnion = IPointingPatternT | IRectanglePatternT | IFillPatternT | ICrossPatternT;
