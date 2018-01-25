import {IObsPlan} from '../interfaces/project/obsplan';
import {IObsProgram} from '../interfaces/project/obsprogram';
import {ObsPlan} from './obsplan';

export class ObsProgram implements IObsProgram {

  ObsPlan: IObsPlan;

  initFromJson(json: any) {
    console.log('ObsProgram', 'initFromJson');
    this.ObsPlan = new ObsPlan().initFromJson(json['prj:ObsPlan']);
    return this;
  }
}
