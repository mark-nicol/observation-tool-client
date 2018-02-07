import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as eq from 'equatorial';

// export interface ISimbadResult {
//   name: string,
//   coords: ValueUnitPair[],
//   properMotion: any,
//   parallax: any,
//   radialVelocity: any
// }

@Injectable()
export class SimbadService {

  private queryUrl: string;

  private static parseName(raw: string) {
    raw = raw.replace('Object', '');
    return raw.substring(0, raw.indexOf('-')).trim();
  }

  private static parseCoords(raw: string) {
    raw          = raw.replace('Coordinates(ICRS,ep=J2000,eq=2000):', '');
    raw          = raw.substring(0, raw.indexOf('(')).trim();
    raw          = raw.replace(/\s/g, ':');
    const coords = raw.split('::');
    coords[0]    = eq.raHms2Deg(coords[0]);
    coords[1]    = eq.decHms2Deg(coords[1]);
    return coords;
  }

  private static parseProperMotion(raw: string) {
    raw = raw.replace('Proper motions: ', '');
    raw = raw.substring(0, raw.indexOf('[')).trim();
    return raw.split(' ');
  }

  private static parseParalaxRadialVelocity(raw: string) {
    raw = raw.substring(raw.indexOf(':') + 1);
    raw = raw.substring(0, raw.indexOf('[')).trim();
    return raw;
  }

  static cleanResponse(raw: string) {
    const result = {
      lonValue:                     null,
      latValue:                     null,
      properMotionCrossValue:       null,
      properMotionDeclinationValue: null,
      parallaxValue:                null,
      radialVelocityValue:          null
    };
    const lines  = raw.split('\n');
    lines.splice(0, 5);
    lines.splice(1, 1);
    lines.splice(2, 3);
    lines.splice(5);
    const coords                        = SimbadService.parseCoords(lines[1]);
    const properMotion                  = SimbadService.parseProperMotion(lines[2]);
    const parallax                      = SimbadService.parseParalaxRadialVelocity(lines[3]);
    const radialVelocity                = SimbadService.parseParalaxRadialVelocity(lines[4]);
    result.lonValue                     = coords[0];
    result.latValue                     = coords[1];
    result.properMotionCrossValue       = properMotion[0] === '~' ? 0.0 : properMotion[0];
    result.properMotionDeclinationValue = properMotion[1] === '~' ? 0.0 : properMotion[1];
    result.parallaxValue                = parallax === '~' ? 0.0 : parallax;
    result.radialVelocityValue          = radialVelocity === '~' ? 0.0 : radialVelocity;
    return result;
  }

  constructor(private httpClient: HttpClient) {
    this.queryUrl = 'http://simbad.u-strasbg.fr/simbad/sim-id?output.format=ASCII&Ident='
  }

  queryByIdentifier(objectIdentifier: string) {
    return this.httpClient.get(this.queryUrl + objectIdentifier, {responseType: 'text'});
  }

}
