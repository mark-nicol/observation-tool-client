/* tslint:disable */
// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObsProposal} from './apdm/obsproposal.interface';
import {IObsProgram} from './apdm/obs-program.interface';
import {IObsUnitSet} from './apdm/obs-unit-set.interface';
import {IObservatoryGoal} from './apdm/observatory-goal.interface';
import {IOpticalPointingScienceGoal} from './apdm/optical-pointing-science-goal.interface';
import {IScienceGoal} from './apdm/science-goal.interface';
import {IObsReview} from './apdm/obs-review.interface';
import {ITargetParametersT} from './target-parameters.interface';
import {ISchedBlock} from './sched-block.interface';
import {ISpectralScanT} from './spectral-scan.interface';
import {IScienceSpectralWindowT} from './science-spectral-window.interface';
import {ICircleT} from './circle.interface';
import {IPolygonT} from './polygon.interface';
import {IEllipseT} from './ellipse.interface';
import {IRectangleT} from './rectangle.interface';
import {ISinglePointT} from './single-point.interface';
import {ICrossPatternT} from './cross-pattern.interface';
import {IHolographyParameters} from './apdm/holography-parameters.interface';
import {IScienceParameters} from './apdm/science-parameters.interface';
import {IOpticalPointingParameters} from './apdm/optical-pointing-parameters.interface';
import {IRadiometricPointingParameters} from './apdm/radiometric-pointing-parameters.interface';
import {IReservationParameters} from './apdm/reservation-parameters.interface';
import {ICalibratorParameters} from './apdm/calibration-parameters.interface';
import {IPointingPattern} from './apdm/pointing-pattern.interface';
import {IRectanglePattern} from './apdm/rectangle-pattern.interface';
import {IFillPattern} from './apdm/fill-pattern.interface';

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

export interface ISpeedT extends IDoubleWithUnitT {
}

export interface ILongitudeT extends IDoubleWithUnitT {
}

export interface ILatitudeT extends IDoubleWithUnitT {
}

export interface IIntTimeSourceT extends IDoubleWithUnitT {
}

export interface ILengthT extends IDoubleWithUnitT {
}

export type IAbstractScienceGoalTUnion = IObservatoryGoal | IOpticalPointingScienceGoal | IScienceGoal;

export type IObsPhaseTUnion = IObsProgram | IObsReview | IObsProposal;

export type IObsUnitTUnion = IObsUnitSet | ISchedBlock;

export type IAbstractScienceSpectralWindowTUnion = ISpectralScanT | IScienceSpectralWindowT;

export type IFieldTUnion = ICircleT | IPolygonT | IEllipseT | IRectangleT | ISinglePointT;

export type IAbstractTargetParametersTUnion = ITargetParametersT;

export type IObservingParametersTUnion = IHolographyParameters | IScienceParameters | IOpticalPointingParameters | IRadiometricPointingParameters | IReservationParameters | ICalibratorParameters;

export type IFieldPatternTUnion = IPointingPattern | IRectanglePattern | IFillPattern | ICrossPatternT;
