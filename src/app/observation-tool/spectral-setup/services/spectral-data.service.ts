import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface DataInterface {
  data: any[]
}

@Injectable()
export class SpectralDataService {

  constructor(private http: HttpClient) {

  }

  getData(): any {
    return this.http.get<DataInterface>('http://localhost:8080/water-vapour/1');
  }

}
