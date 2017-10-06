export const FIELD_SETUP = {
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
    lat: 0.00000,
    lon: 0.00000,
    parallax: 0.00000,
    parallaxUnits: 'mas',
    properMotionCross: 0.00000,
    properMotionCrossUnits: 'mas/yr',
    properMotionDeclination: 0.00000,
    properMotionDeclinationUnits: 'mas/yr',
    radialVelocity: 0.00000,
    radialVelocityUnits: 'm/s',
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
