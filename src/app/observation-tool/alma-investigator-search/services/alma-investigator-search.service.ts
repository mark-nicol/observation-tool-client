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

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {IAlmaInvestigator} from '../../shared/interfaces/alma-investigator.interface';

/**
 * Service to retrieve primary investigators from the ALMA user lookup
 */

@Injectable()
export class AlmaInvestigatorSearchService {
  get selectedPi(): IAlmaInvestigator {
    return this._selectedPi;
  }

  set selectedPi(value: IAlmaInvestigator) {
    this._selectedPi = value;
  }

  /** URL of the ALMA user lookup */
  private piUrl = 'https://cycle-5.asa.alma.cl/ObsprepSubmissionService/UserLookup?action=MatchStrings';
  private _selectedPi: IAlmaInvestigator;

  static resultToInvestigator(result: any): IAlmaInvestigator {
    return {
      index: 0,
      associatedExec: result.executive,
      fullName: result.fullName,
      organisation: result.affiliation,
      mobile: result.telephone,
      eMail: result.email,
      organisationId: result.affiliationId,
      userId: result.uid,
      telephone: result.telephone,
      allowedExec: result.executive,
      verfiedUser: false,
    };
  }

  /**
   * Sets search params to new
   *
   * TODO Change to HttpClient
   * @param http Injected Http service
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Search or refine the ALMA user lookup
   * @param searchVariant The category to search in
   * @param searchStrings The terms to search for
   */
  search(searchVariant: string, searchStrings: string): any {
    const formData = new FormData();
    formData.append('searchVariant', searchVariant);
    formData.append('searchStrings', searchStrings);
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    return this.http.post(this.piUrl, formData, {headers}).map((result: any[]) => {
      return result.map(inv => AlmaInvestigatorSearchService.resultToInvestigator(inv));
    });
  }

}

