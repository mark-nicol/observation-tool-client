import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {PrimaryInvestigator} from "../models/primary-investigator";
import "rxjs/add/operator/toPromise";
import {Observable} from "rxjs/Observable";
import {HttpParams} from "@angular/common/http";


@Injectable()
export class PrimaryInvestigatorService {

  private piUrl = 'api/primaryInvestigators';
  private almaUserLookupUrl = 'https://cycle-5.asa.alma.cl/ObsprepSubmissionService/UserLookup?action=MatchStrings';
  private searchUrl: string;

  constructor(private http: Http) {
  }

  getPIs(): Promise<PrimaryInvestigator[]> {
    return this.http.get(this.piUrl)
      .toPromise()
      .then(response => response.json().data as PrimaryInvestigator[])
      .catch(PrimaryInvestigatorService.handleError);
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  search(searchVariant: string, searchStrings: string) {
    const search = {searchVariant, searchStrings};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    this.http.post(
      this.almaUserLookupUrl,
      JSON.stringify(search),
      headers)
      .subscribe(resp => console.log('RESPONSE', resp),
                err => console.log('ERROR', err));
  }

}
