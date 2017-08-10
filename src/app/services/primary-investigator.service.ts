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
  private almaUserLookupUrl = 'https://cycle-5.asa.alma.cl/ObsprepSubmissionService/UserLookup';
  private searchUrl: string;

  constructor(private http: Http) {
  }

  getPIs(): Promise<PrimaryInvestigator[]> {
    return this.http.get(this.piUrl)
      .toPromise()
      .then(response => response.json().data as PrimaryInvestigator[])
      .catch(PrimaryInvestigatorService.handleError);
  }

  // search(field: string, term: string): Promise<PrimaryInvestigator[]> {
  //   this.searchUrl = this.piUrl.concat('/?', field, '=', term);
  //   return this.http.get(this.searchUrl)
  //     .toPromise()
  //     .then(response => response.json().data as PrimaryInvestigator[])
  //     .catch(PrimaryInvestigatorService.handleError);
  // }

  private static handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  search(searchVariant: string, term: string): Promise<PrimaryInvestigator[]> {

    const body: string = 'searchVariant='+ searchVariant +'&searchStrings=' + term;

    let headers = new Headers({
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
    });



    console.log(this.http.post(this.almaUserLookupUrl, body, {
      params: new HttpParams().set('action', 'MatchStrings')
    }));






    return this.http.post(this.almaUserLookupUrl, body)
      .toPromise()
      .then(response => response.json().data as PrimaryInvestigator[])
      .catch(PrimaryInvestigatorService.handleError);
  }

}
