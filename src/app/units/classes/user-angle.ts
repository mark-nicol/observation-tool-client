import {Angle} from './angle';

export class UserAngle extends Angle {
  get userUnit(): string {
    return this._userUnit;
  }

  set userUnit(value: string) {
    this._userUnit = value;
  }

  private _userUnit: string;

}
