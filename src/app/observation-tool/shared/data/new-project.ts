import {Angle} from '../../../units/classes/angle';
import {AngularVelocity} from '../../../units/classes/angular-velocity';
import {Latitude} from '../../../units/classes/latitude';
import {Longitude} from '../../../units/classes/longitude';
import {Sensitivity} from '../../../units/classes/sensitivity';
import {Speed} from '../../../units/classes/speed';
import {AngleUnits} from '../../../units/enums/angle-units.enum';
import {AngularVelocityUnits} from '../../../units/enums/angular-velocity-units.enum';
import {SpeedUnits} from '../../../units/enums/speed-units.enum';
import {ProjectInterface} from '../interfaces/project.interface';

export const NEW_PROJECT: ProjectInterface = {
  project: {
    principleInvestigator: null,
    priority: 1,
    projectCode: 'ABC123'
  },
  proposal: {
    title: null,
    cycle: null,
    abstract: null,
    proposalType: 'regular',
    scientificCategory: 'cosmology',
    keywords: null,
    studentProject: false,
    relatedProposals: null,
    previousProposals: null,
    investigators: null,
    scienceCase: null,
    duplicateObservations: null
  },
  scienceGoals: {
    0: {
      general: {
        name: null,
        description: null
      },
      fieldSetup: {
        spatialImage: {
          imageFilename: null
        },
        fovParameters: {
          representativeFrequency: 0.000,
          antennaDiameter: '12',
          antennaBeamsize: 0.000,
          showBeamsize: true
        },
        imageQuery: {
          imageServer: '1',
          imageSize: 10.0
        },
        sources: [{
          sourceName: '',
          solarSystemObject: false,
          chosenSolarObject: null,
          targetType: 'individual',
          chosenSystem: 'ICRS', /*TODO change to object*/
          sexagesimalUnits: false,
          lat: new Latitude(),
          lon: new Longitude(),
          parallax: new Angle(AngleUnits.MAS),
          properMotionCross: new AngularVelocity(AngularVelocityUnits.MAS_YR),
          properMotionDeclination: new AngularVelocity(AngularVelocityUnits.MAS_YR),
          radialVelocity: new Speed(SpeedUnits.KM_S),
          radialVelocityReferenceFrame: 'bar',
          redshift: 0.00000,
          dopplerType: 'radio',
          expectedSourceProperties: {
            continuumFluxDensity: new Sensitivity(),
            continuumPolarization: 0.0,
            lineFluxDensity: new Sensitivity(),
            lineWidth: new Speed(),
            linePolarization: 0.0
          },
          fieldCentreCoordinates: {
            coordType: 'relative',
            individual: {
              offsetUnit: 'arcsec',
              rows: [
                {
                  lat: new Latitude(),
                  lon: new Longitude()
                }
              ]
            },
            rectangular: {
              chosenSystem: 'icrs',
              sexagesimalUnits: false,
              lonOffset: new Angle(AngleUnits.ARCSEC),
              latOffset: new Angle(AngleUnits.ARCSEC),
              pLength: new Angle(AngleUnits.ARCSEC),
              qLength: new Angle(AngleUnits.ARCSEC),
              positionAngle: new Angle(),
              spacing: 0.51093,
              spacingUnits: 'fraction'
            }
          }
        }]
      },
      spectralSetup: null,
      calibrationSetup: null,
      controlPerformance: null,
      technicalJustification: null
    }
  }
};
