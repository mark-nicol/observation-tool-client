import {Angle} from '../../../../../units/classes/angle';
import {AngularVelocity} from '../../../../../units/classes/angular-velocity';
import {Flux} from '../../../../../units/classes/flux';
import {Frequency} from '../../../../../units/classes/frequency';
import {Latitude} from '../../../../../units/classes/latitude';
import {Longitude} from '../../../../../units/classes/longitude';
import {Speed} from '../../../../../units/classes/speed';
import {SolarSystemObjects} from '../../../enums/solar-system-objects.enum';

export interface ITargetParameters {
  prj_sourceEphemeris: string;
  prj_pmDec: AngularVelocity;
  type: string;
  prj_sourceCoordinates: ISkyCoordinates;
  prj_sourceVelocity: ISourceVelocity;
  prj_nonSiderealMotion: boolean;
  prj_sourceName: string;
  prj_isMosaic: boolean;
  prj_pmRA: AngularVelocity;
  prj_index: number;
  prj_SinglePoint?: ISinglePoint[];
  prj_Rectangle?: IRectangle;
  solarSystemObject: any/*SolarSystemObjects*/; // TODO change
  prj_ExpectedProperties: IExpectedProperties;
  prj_parallax: Angle;
}

export interface IField {
  prj_name: string;
  prj_centre: ISkyCoordinates;
}

export interface ISinglePoint extends IField {
}

export interface IRectangle extends IField {
  pALong: Angle;
  long: Angle;
  short: Angle;
  spacing: any; // TODO Userunit
  referenceFrequency: Frequency;
}

export interface ISkyCoordinates {
  system: string;
  type: string;
  val_latitude: Latitude;
  val_longitude: Longitude;
  val_fieldName: string;
}

export interface ISourceVelocity {
  referenceSystem: string; // TODO Make enums
  dopplerCalcType: string;
  val_centerVelocity: Speed;
}

export interface IExpectedProperties {
  prj_expectedLineWidth: any; // TODO Userunit
  prj_desiredPolarizationPercentage: number;
  prj_desiredLineCircularPolarizationPercentage: number;
  prj_referenceFrequency: Frequency;
  prj_expectedPeakFluxDensity: Flux;
  prj_expectedImageDynamicRange: number;
  prj_desiredLinePolarizationPercentage: number;
  prj_desiredCircularPolarizationPercentage: number;
  prj_expectedPeakLineFluxDensity: Flux;
  solarActivityLevel: string;
  prj_expectedSpectralDynamicRange: number;
}
