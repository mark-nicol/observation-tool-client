import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {PrimaryInvestigator} from "../models/primary-investigator";
import "rxjs/add/operator/toPromise";


@Injectable()
export class PrimaryInvestigatorService {

  private piUrl = 'api/primaryInvestigators';

  constructor(private http: Http) {
  }

  getPIs(): Promise<PrimaryInvestigator[]> {
    return this.http.get(this.piUrl)
      .toPromise()
      .then(response => response.json().data as PrimaryInvestigator[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
