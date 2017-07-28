import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {PrimaryInvestigator} from "../models/primary-investigator";
import "rxjs/add/operator/toPromise";
import {Observable} from "rxjs/Observable";


@Injectable()
export class PrimaryInvestigatorService {

  private piUrl = 'api/primaryInvestigators';
  private searchUrl: string;

  constructor(private http: Http) {
  }

  getPIs(): Promise<PrimaryInvestigator[]> {
    return this.http.get(this.piUrl)
      .toPromise()
      .then(response => response.json().data as PrimaryInvestigator[])
      .catch(PrimaryInvestigatorService.handleError);
  }

  search(field: string, term: string): Promise<PrimaryInvestigator[]> {
    this.searchUrl = this.piUrl.concat('/?', field, '=', term);
    return this.http.get(this.searchUrl)
      .toPromise()
      .then(response => response.json().data as PrimaryInvestigator[])
      .catch(PrimaryInvestigatorService.handleError);
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
