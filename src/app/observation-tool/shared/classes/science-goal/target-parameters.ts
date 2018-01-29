import {Angle} from '../../../../units/classes/angle';
import {AngularVelocity} from '../../../../units/classes/angular-velocity';
import {
  IExpectedProperties,
  IField,
  ITargetParameters
} from '../../interfaces/project/science-goal/target-parameters.interface';

export class TargetParameters implements ITargetParameters {
  type: string;
  isMosaic: boolean;
  sourceName: string;
  sourceCoordinates: any;
  pmRA: AngularVelocity;
  pmDec: AngularVelocity;
  parallax: Angle;
  nonSiderealMotion: boolean;
  solarSystemObject: any;
  sourceEphemeris: string;
  sourceVelocity: any;
  ephemerisFileName: string;
  index: number;
  sdReferencePosition: any;
  ExpectedProperties: IExpectedProperties;
  fields: IField[];


  constructor(type?: string,
              isMosaic?: boolean,
              sourceName?: string,
              sourceCoordinates?: any,
              pmRA?: AngularVelocity,
              pmDec?: AngularVelocity,
              parallax?: Angle,
              nonSiderealMotion?: boolean,
              solarSystemObject?: any,
              sourceEphemeris?: string,
              sourceVelocity?: any,
              ephemerisFileName?: string,
              index?: number,
              sdReferencePosition?: any,
              ExpectedProperties?: IExpectedProperties,
              fields?: IField[]) {
    this.type                = type;
    this.isMosaic            = isMosaic;
    this.sourceName          = sourceName;
    this.sourceCoordinates   = sourceCoordinates;
    this.pmRA                = pmRA;
    this.pmDec               = pmDec;
    this.parallax            = parallax;
    this.nonSiderealMotion   = nonSiderealMotion;
    this.solarSystemObject   = solarSystemObject;
    this.sourceEphemeris     = sourceEphemeris;
    this.sourceVelocity      = sourceVelocity;
    this.ephemerisFileName   = ephemerisFileName;
    this.index               = index;
    this.sdReferencePosition = sdReferencePosition;
    this.ExpectedProperties  = ExpectedProperties;
    this.fields              = fields;
  }

}
