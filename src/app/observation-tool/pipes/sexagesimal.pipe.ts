import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sexagesimal'
})
export class SexagesimalPipe implements PipeTransform {

  static degToRad(value: number): number {
    return value * (Math.PI / 180.00);
  }

  static radToDeg(value: number): number {
    return value * (180.00 / Math.PI);
  }

  transform(value: any, hours: boolean): any {
    // Convert degrees to radians
    const rad = SexagesimalPipe.degToRad(value);
    // Radians to hours minutes seconds
    return hours ? this.radToHrMinSec(rad, 3) : this.radToDegMinSec(rad, 2);
  }

  radToHrMinSec(rad: number, secFig: number) {
    if (isNaN(rad)) {
      return null;
    } else {
      const degrees = SexagesimalPipe.radToDeg(rad);
      console.log('degrees =', degrees);
      const sign = degrees >= 0.0 ? 1 : -1;
      console.log('sign =', sign);
      let hours = degrees / 15.0,
        round = 1.388888888888889E-4 * sign;
      console.log('hours =', hours);
      console.log('round =', round);
      let h;
      for (h = 0; h < secFig; ++h) {
        round *= 0.1;
      }
      console.log('round post loop', round);
      hours += round;
      console.log('hours += round =', hours);
      hours *= sign;
      console.log('hours *= sign =', hours);
      h = Math.trunc(hours);
      console.log('h', h);
      const minutes = (hours - h) * 60.0,
        m = Math.trunc(minutes),
        seconds = (minutes - m ) * 60.0;
      console.log('minutes', minutes);
      console.log('m', m);
      console.log('seconds', seconds);
      return this.formatHms(sign === 1,
        h,
        m,
        seconds,
        secFig);
    }
  }

  formatHms(positive: boolean, hour: any, min: any, sec: any, dp: number) {
    return (hour + ':' + min + ':' + sec);
  }

  radToDegMinSec(value: number, secFig: number) {
    if (isNaN(value)) {
      return null;
    } else {
      let degrees = SexagesimalPipe.radToDeg(value);
      const sign = degrees >= 0.0 ? 1 : -1;
      let round = 1.388888888888889E-4 * sign,
        d;
      for (d = 0; d < secFig; ++d) {
        round *= 0.1;
      }
      degrees += round;
      degrees *= sign;
      d = Math.trunc(degrees);
      const minutes = (degrees - d) * 60.0,
        m = Math.trunc(minutes),
        seconds = (minutes - m) * 60.0;
      return this.formatHms(sign === 1, d, m, seconds, secFig);
    }
  }

}
