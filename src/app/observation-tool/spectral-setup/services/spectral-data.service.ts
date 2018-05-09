import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ISpectralLine} from '../../shared/interfaces/spectral-line.interface';

/**
 * Service to supply the spectral visualiser with data
 */

@Injectable()
export class SpectralDataService {

  private _splatalogue: ISpectralLine[];
  private _observable: Observable<any>;
          _selectedLines: ISpectralLine[] = [];

  static filterSplatalogue(item: ISpectralLine, filters: any) {
    const frequencyInLowerBound = (item.orderedfreq / 500) >= filters.freqMin;
    const frequencyInUpperBound = (item.orderedfreq / 500) <= filters.freqMax;
    const foundWords            = item.s_name_noparens.toLowerCase().indexOf(filters.description.toLocaleLowerCase()) > -1 ||
                                  item.chemical_name.toLowerCase().indexOf(filters.description.toLowerCase()) > -1;
    return frequencyInLowerBound && frequencyInUpperBound && foundWords;
  }

  /**
   * Constructor
   *
   * @param http Injected HttpClient service
   */
  constructor(private http: HttpClient) {

  }

  /**
   * Returns the water column data for a given octile
   * @param option The octile to retrieve data for
   */
  getSpectrum(option: number): any {
    return this.http.get(`http://localhost:8080/api/spectral/${option}`);
  }

  getSplatalogue(filters?: any): any {
    if (this._splatalogue) {
        return Observable.of(this._splatalogue.filter(x => SpectralDataService.filterSplatalogue(x, filters)));
    } else if (this._observable) {
      return this._observable;
    } else {
      this._observable = this.http.get('http://localhost:8080/api/spectral/splatalogue').map((response: ISpectralLine[]) => {
        this._observable  = null;
        this._splatalogue = response;
        return this._splatalogue;
      }).share();
      return this._observable;
    }
  }

  get selectedLines(): Observable<ISpectralLine[]> {
    return Observable.of(this._selectedLines);
  }

  selectLine(line: ISpectralLine) {
    this._selectedLines.push(line);
  }

  removeLine(line: ISpectralLine) {
    this._selectedLines.splice(this._selectedLines.indexOf(line), 1);
  }
}
