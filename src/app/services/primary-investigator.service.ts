import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Headers, RequestOptions, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class PrimaryInvestigatorService {

  //private piUrl = 'api/primaryInvestigators/';
  // private piUrl = 'http://localhost:8080/ObsprepSubmissionService/UserLookup?action=MatchStrings';
  private piUrl = 'https://cycle-5.asa.alma.cl/ObsprepSubmissionService/UserLookup?action=MatchStrings';
  private searchParams: URLSearchParams;

  constructor(private http: HttpClient) {
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
    let formData = new FormData();
    formData.append('searchVariant', searchVariant);
    formData.append('searchStrings', searchStrings);
    let headers = new Headers();
    headers.set('Accept', 'application/json');
    let options = new RequestOptions({headers});
    return this.http.post(this.piUrl, formData, headers);
  }

  // private static handleError(error: any): Promise<any> {
  //   console.error('An error occured', error);
  //   return Promise.reject(error.message || error);
  // }

}

