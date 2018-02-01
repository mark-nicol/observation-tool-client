import {ISinglePoint, ISkyCoordinates} from '../../interfaces/project/science-goal/target-parameters.interface';

export class SinglePoint implements ISinglePoint {
  name: string;
  centre: ISkyCoordinates;

}
