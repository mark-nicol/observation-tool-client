import {Angle} from '../../../../../units/classes/angle';
import {AngularVelocity} from '../../../../../units/classes/angular-velocity';
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
  solarSystemObject: SolarSystemObjects;
  sourceEphemeris: string;
  sourceVelocity: ISourceVelocity;
  ephemerisFileName: string;
  index: number;
  sdReferencePosition: ISkyCoordinates;
  ExpectedProperties: IExpectedProperties;
  fields: IField[];
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
  spacing: Angle;
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
  expectedPeakFluxDensity: any; // TODO Change
  desiredPolarizationPercentage: number;
  expectedLineWidth: Frequency;
  referenceFrequency: Frequency;
  expectedPeakLineFluxDensity: any; // TODO Change
  expectedSpectralDynamicRange: number;
  expectedImageDynamicRange: number;
  desiredLinePolarizationPercentage: number;
  desiredLineCircularPolarizationPercentage: number;
  desiredCircularPolarizationPercentage: number;
  solarActivityLevel: string;
}
