import {ISinglePoint, ISkyCoordinates} from '../../interfaces/project/science-goal/target-parameters.interface';

export class SinglePoint implements ISinglePoint {
  prj_centre: ISkyCoordinates;
  prj_name: string;
  }
