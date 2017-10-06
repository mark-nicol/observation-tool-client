import {CoordSystem} from "./coord-system.interface";

export interface SourceComponentInterface {
  sourceName: string,
  solarSystemObject: boolean,
  chosenSolarObject: string,
  targetType: string,
  chosenSystem: CoordSystem,
  sexagesimalUnits: boolean,
  lat: number,
  lon: number,
  parallax: number,
  parallaxUnits: string,
  properMotionCross: number,
  properMotionCrossUnits: string,
  properMotionDeclination: number,
  properMotionDeclinationUnits: string,
  radialVelocity: number,
  radialVelocityUnits: string,
  radialVelocityReferenceFrame: string,
  redshift: number,
  dopplerType: string
}
