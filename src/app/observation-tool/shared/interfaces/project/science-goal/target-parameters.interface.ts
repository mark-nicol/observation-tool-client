import {Angle} from '../../../../../units/classes/angle';
import {AngularVelocity} from '../../../../../units/classes/angular-velocity';
import {Flux} from '../../../../../units/classes/flux';
import {Frequency} from '../../../../../units/classes/frequency';
import {Latitude} from '../../../../../units/classes/latitude';
import {Longitude} from '../../../../../units/classes/longitude';
import {Speed} from '../../../../../units/classes/speed';
import {SolarSystemObjects} from '../../../enums/solar-system-objects.enum';

export interface ITargetParameters {
  sourceEphemeris: string;
  pmDec: AngularVelocity;
  type: string;
  sourceCoordinates: ISkyCoordinates;
  sourceVelocity: ISourceVelocity;
  nonSiderealMotion: boolean;
  sourceName: string;
  isMosaic: boolean;
  pmRA: AngularVelocity;
  index: number;
  SinglePoint?: ISinglePoint[];
  Rectangle?: IRectangle;
  solarSystemObject: any/*SolarSystemObjects*/; // TODO change
  ExpectedProperties: IExpectedProperties;
  parallax: Angle;
}

export interface IField {
  name: string;
  centre: ISkyCoordinates;
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
  latitude: Latitude;
  longitude: Longitude;
  fieldName: string;
}

export interface ISourceVelocity {
  referenceSystem: string; // TODO Make enums
  dopplerCalcType: string;
  centerVelocity: Speed;
}

export interface IExpectedProperties {
  expectedLineWidth: any; // TODO Userunit
  desiredPolarizationPercentage: number;
  desiredLineCircularPolarizationPercentage: number;
  referenceFrequency: Frequency;
  expectedPeakFluxDensity: Flux;
  expectedImageDynamicRange: number;
  desiredLinePolarizationPercentage: number;
  desiredCircularPolarizationPercentage: number;
  expectedPeakLineFluxDensity: Flux;
  solarActivityLevel: string;
  expectedSpectralDynamicRange: number;
}
