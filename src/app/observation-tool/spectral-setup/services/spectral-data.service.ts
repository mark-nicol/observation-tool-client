import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class SpectralDataService {

  constructor(private http: HttpClient) {

  }

  getData(option: number): any {
    return this.http.get(`http://localhost:8080/water-vapour/${option}`);
  }

}
