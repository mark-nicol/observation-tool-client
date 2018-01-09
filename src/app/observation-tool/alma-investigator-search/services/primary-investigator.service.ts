import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/**
 * Service to retrieve primary investigators from the ALMA user lookup
 */

@Injectable()
export class PrimaryInvestigatorService {

  /** URL of the ALMA user lookup */
  private piUrl = 'https://cycle-5.asa.alma.cl/ObsprepSubmissionService/UserLookup?action=MatchStrings';

  /** Parameters for the search */
  private searchParams: URLSearchParams;

  /**
   * Sets search params to new
   *
   * TODO Change to HttpClient
   * @param http Injected Http service
   */
  constructor(private http: Http) {
    this.searchParams = new URLSearchParams();
  }

  /**
   * Start a new search, resets the search params
   * @param searchVariant The category to search in
   * @param searchStrings The terms to search for
   */
  newSearch(searchVariant: string, searchStrings: string) {
    this.searchParams = new URLSearchParams();
    return this.search(searchVariant, searchStrings);
  }

  /**
   * Search or refine the ALMA user lookup
   * @param searchVariant The category to search in
   * @param searchStrings The terms to search for
   */
  search(searchVariant: string, searchStrings: string) {
    const formData = new FormData();
    formData.append('searchVariant', searchVariant);
    formData.append('searchStrings', searchStrings);
    const headers = new Headers();
    headers.set('Accept', 'application/json');
    const options = new RequestOptions({headers});
    return this.http.post(this.piUrl, formData, options);
  }

}

