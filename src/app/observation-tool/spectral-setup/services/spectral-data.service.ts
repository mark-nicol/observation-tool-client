/*
 * ALMA - Atacama Large Millimeter Array
 * Copyright (c) UKATC - UK Astronomy Technology Centre, Science and Technology Facilities Council, 2018
 * (in the framework of the ALMA collaboration).
 * All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307  USA
 */

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
    return this.http.get(`http://localhost:8080/spectral/spectrum/${option}`);
  }

  getSplatalogue(filters?: any): any {
    if (this._splatalogue) {
        return Observable.of(this._splatalogue.filter(x => SpectralDataService.filterSplatalogue(x, filters)));
    } else if (this._observable) {
      return this._observable;
    } else {
      this._observable = this.http.get('http://localhost:8080/spectral/splatalogue').map((response: ISpectralLine[]) => {
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
