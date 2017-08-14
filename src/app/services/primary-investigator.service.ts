import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";


@Injectable()
export class PrimaryInvestigatorService {

  private piUrl = 'api/primaryInvestigators';
  private almaUserLookupUrl = 'https://cycle-5.asa.alma.cl/ObsprepSubmissionService/UserLookup?action=MatchStrings';
  private searchUrl: string;

  constructor(private http: Http) {
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  search(searchVariant: string, searchStrings: string) {
    this.searchUrl = this.piUrl.concat('/?', searchVariant, '=', searchStrings);
    return this.http.get(this.searchUrl)
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

}
