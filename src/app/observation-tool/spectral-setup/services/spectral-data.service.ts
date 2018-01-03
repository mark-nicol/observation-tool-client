import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/**
 * Service to supply the spectral visualiser with data
 */

@Injectable()
export class SpectralDataService {

  /**
   * Constructor
   *
   * @param http Injected HttpClient service
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Returns the water column data for a given octile
   * @param option The octile to retrieve data for
   */
  getData(option: number): any {
    return this.http.get(`http://localhost:8080/water-vapour/${option}`);
  }

}
