import {Angle} from '../../../../../units/classes/angle';
import {AngularVelocity} from '../../../../../units/classes/angular-velocity';
import {Flux} from '../../../../../units/classes/flux';
import {Frequency} from '../../../../../units/classes/frequency';
import {Latitude} from '../../../../../units/classes/latitude';
import {Longitude} from '../../../../../units/classes/longitude';
import {Speed} from '../../../../../units/classes/speed';
import {SolarSystemObjects} from '../../../enums/solar-system-objects.enum';

export interface ITargetParameters {
  type: string;
  isMosaic: boolean;
  sourceName: string;
  sourceCoordinates: ISkyCoordinates;
  pmRA: AngularVelocity;
  pmDec: AngularVelocity;
  parallax: Angle;
  nonSiderealMotion: boolean;
  solarSystemObject: any/*SolarSystemObjects*/; // TODO change
  sourceEphemeris: string;
  sourceVelocity: ISourceVelocity;
  ephemerisFileName: string;
  index: number;
  sdReferencePosition: ISkyCoordinates;
  ExpectedProperties: IExpectedProperties;
  SinglePoint?: ISinglePoint[]
  Rectangle?: IRectangle;
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
  expectedPeakFluxDensity: Flux;
  desiredPolarizationPercentage: number;
  expectedLineWidth: any; // TODO Userunit
  referenceFrequency: Frequency;
  expectedPeakLineFluxDensity: Flux;
  expectedSpectralDynamicRange: number;
  expectedImageDynamicRange: number;
  desiredLinePolarizationPercentage: number;
  desiredLineCircularPolarizationPercentage: number;
  desiredCircularPolarizationPercentage: number;
  solarActivityLevel: string;
}
