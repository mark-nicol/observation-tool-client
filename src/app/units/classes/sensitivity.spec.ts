import {SensitivityUnits} from '../enums/sensitivity-units.enum';
import {Sensitivity} from './sensitivity';

describe('Class: Sensitivity', () => {
  let cls: Sensitivity;

  beforeEach(() => {
    cls = new Sensitivity(undefined, 10.000);
  });

  afterEach(() => {
    cls = null;
  });

  it('Default units should be JY', () => {
    expect(cls.defaultUnit).toEqual(SensitivityUnits.JY);
  });

  describe('Conversion checks', () => {

    it('10 JY in MJY should be 10000', () => {
      expect(cls.getValueInUnits(SensitivityUnits.MJY)).toEqual(10000);
    });

  });

});
