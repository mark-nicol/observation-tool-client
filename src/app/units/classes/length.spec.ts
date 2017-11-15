import {LengthUnits} from '../enums/length-units.enum';
import {Length} from './length';

describe('Class: Length', () => {
  let cls: Length;

  beforeEach(() => {
    cls = new Length(undefined, 10);
  });

  afterEach(() => {
    cls = null;
  });

  it('10 MM in default unit should be 10', () => {
    expect(cls.getValueInDefaultUnits()).toEqual(10);
  });

  it('Default unit should be MM', () => {
    expect(cls.defaultUnit).toEqual(LengthUnits.MM);
  });

  it('10 MM to CM should be 1', () => {
    expect(cls.getValueInUnits(LengthUnits.CM)).toEqual(1.0);
  });

  it('10 MM to M should be 10000', () => {
    expect(cls.getValueInUnits(LengthUnits.M)).toEqual(0.01);
  });

  it('10 MM in KM should be 0.01', () => {
    expect(+cls.getValueInUnits(LengthUnits.KM).toFixed(5)).toEqual(1e-5);
  });

  it('Change units to CM to work', () => {
    cls.unit = LengthUnits.CM;
    expect(cls.unit).toEqual(LengthUnits.CM);
  });

  it('1 PC to KM should be 3.0951e13', () => {
    cls.unit  = LengthUnits.PC;
    cls.value = 1.000;
    expect(cls.getValueInUnits(LengthUnits.KM)).toEqual(3.0951e13);
  });

  it('Value should remain constant', () => {
    for (let i = 0; i < 5; i++) {
      cls.getValueInUnits(LengthUnits.CM);
    }
    expect(cls.value).toEqual(10);
  });

});
