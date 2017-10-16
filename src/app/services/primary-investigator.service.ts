import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class PrimaryInvestigatorService {

  private piUrl = 'https://cycle-5.asa.alma.cl/ObsprepSubmissionService/UserLookup?action=MatchStrings';
  private searchParams: URLSearchParams;

  constructor(private http: Http) {
    this.searchParams = new URLSearchParams();
  }

  newSearch(searchVariant: string, searchStrings: string) {
    this.searchParams = new URLSearchParams();
    return this.search(searchVariant, searchStrings);
  }

  search(searchVariant: string, searchStrings: string) {
    let formData = new FormData();
    formData.append('searchVariant', searchVariant);
    formData.append('searchStrings', searchStrings);
    let headers = new Headers();
    headers.set('Accept', 'application/json');
    let options = new RequestOptions({headers});
    return this.http.post(this.piUrl, formData, options);
  }

}

