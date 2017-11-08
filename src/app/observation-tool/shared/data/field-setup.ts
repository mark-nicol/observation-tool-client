import {Latitude} from '../../../units/classes/latitude';
import {Longitude} from '../../../units/classes/longitude';
import {Angle} from '../../../units/classes/angle';
import {AngularVelocity} from '../../../units/classes/angular-velocity';
import {Speed} from '../../../units/classes/speed';

export const FIELD_SETUP_DATA = {
  spatialImage: {
    imageFilename: ''
  },
  fovParameters: {
    representativeFrequency: 0.0000,
    antennaDiameter: '12m',
    antennaBeamsize: 0.000,
    showAntennaBeamsize: false
  },
  imageQuery: {
    imageServer: '1',
    imageSize: 0.00
  },
  source: {
    sourceName: '',
    solarSystemObject: false,
    chosenSolarObject: 'Mercury',
    targetType: 'individual',
    chosenSystem: 'ICRS', /*TODO change to object*/
    sexagesimalUnits: false,
    lat: new Latitude(),
    lon: new Longitude(),
    parallax: new Angle(),
    properMotionCross: new AngularVelocity(),
    properMotionDeclination: new AngularVelocity(),
    radialVelocity: Speed,
    radialVelocityReferenceFrame: 'bar',
    redshift: 0.00000,
    dopplerType: 'Radio'
  },
  expectedSourceProperties: {
    peakContinuum: 0.00000,
    peakContinuumUnits: 'mJy',
    continuumPolarizationPercentage: 0.0,
    peakLineFlux: 0.00000,
    peakLineFluxUnits: 'mJy',
    lineWidth: 0.00000,
    lineWidthUnits: 'm/s',
    linePolarizationPercentage: 0.0
  },
  fieldCentreCoordinates: {
    coordType: 'relative',
    individual: {
      offsetUnit: 'mas',
      rows: [
        {
          lat: '0',
          lon: '0'
        }
      ]
    },
    rectangular: {
      chosenSystem: 'ICRS',
      sexagesimalUnits: false,
      lonOffset: 0.00000,
      lonOffsetUnits: 'mas',
      latOffset: 0.00000,
      latOffsetUnits: 'mas',
      pLength: 0.00000,
      pLengthUnits: 'mas',
      qLength: 0.00000,
      qLengthUnits: 'mas',
      positionAngle: 0.0000,
      positionAngleUnits: 'mas',
      spacing: 0.51093,
      spacingUnits: 'Fraction of antenna beamsize'
    }
  },
};
