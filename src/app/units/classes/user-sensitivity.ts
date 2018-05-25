import {Sensitivity} from './sensitivity';

export class UserSensitivity extends Sensitivity {
  get userUnit(): string {
    return this._userUnit;
  }

  set userUnit(value: string) {
    this._userUnit = value;
  }

  private _userUnit: string;

}
