import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {AlmaInvestigatorInterface} from '../../shared/interfaces/alma-investigator.interface';

/**
 * Service to retrieve primary investigators from the ALMA user lookup
 */

@Injectable()
export class AlmaInvestigatorSearchService {

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
  constructor(private http: HttpClient) {
    this.searchParams = new URLSearchParams();
  }

  /**
   * Start a new search, resets the search params
   * @param searchVariant The category to search in
   * @param searchStrings The terms to search for
   */
  newSearch(searchVariant: string, searchStrings: string): Observable<AlmaInvestigatorInterface[]> {
    this.searchParams = new URLSearchParams();
    return this.search(searchVariant, searchStrings);
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

