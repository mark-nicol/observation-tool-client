import {Frequency} from './frequency';

export class UserFrequency extends Frequency {
  get userUnit(): string {
    return this._userUnit;
  }

  set userUnit(value: string) {
    this._userUnit = value;
  }

  private _userUnit: string;

}
