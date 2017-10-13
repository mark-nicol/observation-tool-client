import {AngularVelocityUnits} from '../enums/angular-velocity-units.enum';
import {AngularVelocity} from './angular-velocity';

describe('Class: AngularVelocity', () => {
  let cls: AngularVelocity;

  beforeEach(() => {
    cls = new AngularVelocity(undefined, 10.000);
  });

  afterEach(() => {
    cls = null;
  });

  it('Default units should be DEG_S', () => {
    expect(cls.defaultUnit).toEqual(AngularVelocityUnits.DEG_S);
  });

  describe('Conversion checks', () => {

    it('10 DEG_S in ARCSEC_S should be 36000', () => {
      expect(cls.getValueInUnits(AngularVelocityUnits.ARCSEC_S)).toEqual(36000);
    });

    it('10 DEG_S in ARCMIN_S should be 600', () => {
      expect(cls.getValueInUnits(AngularVelocityUnits.ARCMIN_S)).toEqual(600);
    });

    it('10 DEG_S in MAS_YR should be 113544e10', () => {
      expect(cls.getValueInUnits(AngularVelocityUnits.MAS_YR)).toEqual(113544e10);
    });

  });

});
