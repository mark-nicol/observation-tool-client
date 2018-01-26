import {IObsPlan} from '../interfaces/project/obsplan.interface';
import {IObsProgram} from '../interfaces/project/obsprogram.interface';
import {ObsPlan} from './obsplan';

export class ObsProgram implements IObsProgram {

  ObsPlan: IObsPlan;

  initFromJson(json: any) {
    console.log('ObsProgram', 'initFromJson');
    this.ObsPlan = new ObsPlan().initFromJson(json['prj:ObsPlan']);
    return this;
  }
}
