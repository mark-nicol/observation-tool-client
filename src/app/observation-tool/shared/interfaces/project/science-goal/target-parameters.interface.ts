import {Angle} from '../../../../../units/classes/angle';
import {AngularVelocity} from '../../../../../units/classes/angular-velocity';
import {Frequency} from '../../../../../units/classes/frequency';

export interface ITargetParameters {
  type: string;
  isMosaic: boolean;
  sourceName: string;
  sourceCoordinates: any; // TODO Change
  pmRA: AngularVelocity;
  pmDec: AngularVelocity;
  parallax: Angle;
  nonSiderealMotion: boolean;
  solarSystemObject: any; // TODO Change
  sourceEphemeris: string;
  sourceVelocity: any; // TODO Change
  ephemerisFileName: string;
  index: number;
  sdReferencePosition: any; // TODO Change
  ExpectedProperties: IExpectedProperties;
  fields: IField[];
}

export interface IField {
  name: string;
  centre: any; // TODO Change
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
