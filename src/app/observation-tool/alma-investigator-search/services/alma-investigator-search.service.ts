import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/**
 * Service to retrieve primary investigators from the ALMA user lookup
 */

@Injectable()
export class AlmaInvestigatorSearchService {

  /** URL of the ALMA user lookup */
  private piUrl = 'https://cycle-5.asa.alma.cl/ObsprepSubmissionService/UserLookup?action=MatchStrings';

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
    return this.http.post(this.piUrl, formData, {headers});
  }

}

