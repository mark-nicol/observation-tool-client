import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/**
 * Service to supply the spectral visualiser with data
 */

@Injectable()
export class SpectralDataService {

  splatalogue: any;

  /**
   * Constructor
   *
   * @param http Injected HttpClient service
   */
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/spectral-data/splatalogue').subscribe(result => {
      console.log('Retrieving Splatalogue');
      this.splatalogue = result
    });
  }

  /**
   * Returns the water column data for a given octile
   * @param option The octile to retrieve data for
   */
  getSpectrum(option: number): any {
    return this.http.get(`http://localhost:8080/spectral-data/${option}`);
  }

  getSplatalogue(): any {
    if (this.splatalogue) {
      console.log('Exists');
      return this.splatalogue;
    }else
      this.http.get('http://localhost:8080/spectral-data/splatalogue').subscribe(result => {
        this.splatalogue = result;
        return this.splatalogue;
      });
  }

}
