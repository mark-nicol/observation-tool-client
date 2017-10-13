import {Frequency} from './frequency';
import {FrequencyUnits} from '../enums/frequency-units.enum';

describe('Class: Frequency', () => {
  let cls: Frequency;

  beforeEach(() => {
    cls = new Frequency(undefined, 10.000);
  });

  afterEach(() => {
    cls = null;
  });

  it('Default units should be GHZ', () => {
    expect(cls.defaultUnit).toEqual(FrequencyUnits.GHZ);
  });

  describe('Conversion checks', () => {

    it('10 GHZ in MHZ should be 10000', () => {
      expect(cls.getValueInUnits(FrequencyUnits.MHZ)).toEqual(10000);
    });

    it('10 GHZ in KHZ should be 10000000', () => {
      expect(cls.getValueInUnits(FrequencyUnits.KHZ)).toEqual(10000000);
    });

    it('10 GHZ in HZ should be 10000000000', () => {
      expect(+cls.getValueInUnits(FrequencyUnits.HZ).toFixed(0)).toEqual(10000000000);
    });

  });

});
