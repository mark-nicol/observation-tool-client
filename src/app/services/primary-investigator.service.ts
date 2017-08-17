import {Injectable} from "@angular/core";
import {Http, RequestOptions, URLSearchParams, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class PrimaryInvestigatorService {

  //private piUrl = 'api/primaryInvestigators/';
  private piUrl = 'http://localhost:8080/ObsprepSubmissionService/UserLookup?action=MatchStrings';
  private searchParams: URLSearchParams;

  constructor(private http: Http) {
    this.searchParams = new URLSearchParams();
  }

  newSearch(searchVariant: string, searchStrings: string) {
    this.searchParams = new URLSearchParams();
    return this.search(searchVariant, searchStrings);
  }

  // search(searchVariant: string, searchStrings: string) {
  //   this.searchParams.set(searchVariant, searchStrings);
  //   return this.http.get(this.piUrl, {params: this.searchParams});
  // }

  search(searchVariant: string, searchStrings: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    let options = new RequestOptions({headers});

    let body = 'searchVariant=' + searchVariant + "&searchStrings=" + searchStrings;
    return this.http.post(this.piUrl, body, options);
  }

  // private static handleError(error: any): Promise<any> {
  //   console.error('An error occured', error);
  //   return Promise.reject(error.message || error);
  // }

}

