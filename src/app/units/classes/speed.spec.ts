import {SpeedUnits} from '../enums/speed-units.enum';
import {Speed} from './speed';

describe('Class: Speed', () => {
  let cls: Speed;

  beforeEach(() => {
    cls = new Speed(undefined, 10);
  });

  afterEach(() => {
    cls = null;
  });

  it('Default unit should be KM/S', () => {
    expect(cls.defaultUnit).toEqual(SpeedUnits.KM_S);
  });

  describe('Conversion checks', () => {
    it('10 KM/S in KM/H should be 0.0027777778', () => {
      expect(+cls.getValueInUnits(SpeedUnits.KM_H).toFixed(10)).toEqual(0.0027777778);
    });

    it('10 KM/S in M/S should be 10000', () => {
      expect(+cls.getValueInUnits(SpeedUnits.M_S).toFixed(10)).toEqual(10000);
    });
  });

});
