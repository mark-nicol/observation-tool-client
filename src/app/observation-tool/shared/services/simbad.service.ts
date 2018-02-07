import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class SimbadService {

  result = {
    name:         null,
    ra:           null,
    dec:          null,
    properMotion: null,
    parallax:     null
  };
  private queryUrl: string;

  constructor(private httpClient: HttpClient) {
    // this.queryUrl = SimbadService.simbadUrl +
    //                 'script=output console=off script=off\n' +
    //                 'format object \"%IDLIST(1)|%COO(d;A|D;;;)|%PM(A|D)|%PLX(V)|%RV(V)\"\n' +
    //                 'query id ';
    // this.queryUrl = SimbadService.simbadUrl +
    //                 'script=format object \"%IDLIST(1)|%COO(d;A|D;;;)|%PM(A|D)|%PLX(V)|%RV(V)\"\\';
    // this.queryUrl = this.queryUrl
    //                     .replace('\%', '%25')
    //                     .split('\n').join('%0a')
    //                     .split(' ').join('%20')
    //                     .replace('\\\+', '%2b');
    this.queryUrl = 'http://simbad.u-strasbg.fr/simbad/sim-id?output.format=ASCII&Ident='
  }

  queryByIdentifier(objectIdentifier: string) {
    this.httpClient.get(this.queryUrl + objectIdentifier, {responseType: 'text'}).subscribe(result => this.cleanResponse(result));
  }

  /**
   * Extract Name(0), RA(1), Dec(1), PmRA(5), PmDec(5), Parallax(6), Radial Velocity(7)
   */

  cleanResponse(raw: string) {
    const lines = raw.split('\n');
    lines.splice(0, 5);
    lines.splice(1, 1);
    lines.splice(2, 3);
    lines.splice(5);
    // console.log(this.parseName(lines[0]));
    // console.log(this.parseCoords(lines[1]));
    // console.log(this.parseProperMotion(lines[2]));
    console.log(this.parseParalaxRadialVelocity(lines[3]));
    console.log(this.parseParalaxRadialVelocity(lines[4]));
  }

  parseName(raw: string) {
    raw = raw.replace('Object', '');
    return raw.substring(0, raw.indexOf('-')).trim();
  }

  parseCoords(raw: string) {
    raw          = raw.replace('Coordinates(ICRS,ep=J2000,eq=2000):', '');
    raw          = raw.substring(0, raw.indexOf('(')).trim();
    const coords = raw.split('  ');
    return coords;
  }

  parseProperMotion(raw: string) {
    raw      = raw.replace('Proper motions: ', '');
    raw      = raw.substring(0, raw.indexOf('[')).trim();
    const pm = raw.split(' ');
    return pm;
  }

  parseParalaxRadialVelocity(raw: string) {
    raw = raw.substring(raw.indexOf(':') + 1);
    raw = raw.substring(0, raw.indexOf('[')).trim();
    return raw;
  }

}
