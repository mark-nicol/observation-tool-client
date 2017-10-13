import {Latitude} from './latitude';
import {LatitudeUnits} from '../enums/latitude-units.enum';

describe('Class: Latitude', () => {
  let cls: Latitude;

  beforeEach(() => {
    cls = new Latitude(undefined, 10.000);
  });

  afterEach(() => {
    cls = null;
  });

  it('Default units should be DEG', () => {
    expect(cls.defaultUnit).toEqual(LatitudeUnits.DEG);
  });

  describe('Conversion checks', () => {

    it('10 DEG in default units should be 10', () => {
      expect(cls.getValueInDefaultUnits()).toEqual(10.000);
    });

    it('10 DEG in RAD should be 0.174533', () => {
      expect(+cls.getValueInUnits(LatitudeUnits.RAD).toFixed(6)).toEqual(0.174533);
    });

    it('10 DEG in MAS should be 36000000', () => {
      expect(+cls.getValueInUnits(LatitudeUnits.MAS).toFixed(0)).toEqual(36000000);
    });

    it('10 DEG in ARCSEC should be 36000', () => {
      expect(cls.getValueInUnits(LatitudeUnits.ARCSEC)).toEqual(36000);
    });

    it('10 DEG in ARCMIN should be 600', () => {
      expect(cls.getValueInUnits(LatitudeUnits.ARCMIN)).toEqual(600);
    });

  });

});
