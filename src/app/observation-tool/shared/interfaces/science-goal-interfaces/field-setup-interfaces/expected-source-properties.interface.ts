import {Sensitivity} from '../../../../../units/classes/sensitivity';
import {Speed} from '../../../../../units/classes/speed';

export interface ExpectedSourcePropertiesInterface {
  continuumFluxDensity: Sensitivity,
  continuumPolarization: number,
  lineFluxDensity: Sensitivity,
  lineWidth: Speed,
  linePolarization: number
}
