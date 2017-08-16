import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class PrimaryInvestigatorService {

  private piUrl = 'api/primaryInvestigators/';
  private almaUserLookupUrl = 'https://cycle-5.asa.alma.cl/ObsprepSubmissionService/UserLookup?action=MatchStrings';
  private searchParams: URLSearchParams;

  constructor(private http: Http) {
    this.searchParams = new URLSearchParams();
  }

  newSearch(searchVariant: string, searchStrings: string) {
    this.searchParams = new URLSearchParams();
    return this.search(searchVariant, searchStrings);
  }

  search(searchVariant: string, searchStrings: string) {
    this.searchParams.set(searchVariant, searchStrings);
    return this.http.get(this.piUrl, {params: this.searchParams});
  }

  searchPost(searchVariant: string, searchStrings: string) {
    let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    headers.append('Content-Type', 'multipart/form-data; boundary=----WebKitFormBoundary8KN6AmVANq817OnO');

    let body = new URLSearchParams();
    body.set('searchVariant', 'Name');
    body.set('searchStrings', 'Alan');

    this.http.post(
      this.almaUserLookupUrl,
      body.toString()
    )
      .subscribe();
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}

