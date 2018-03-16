import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ISpectralLine} from '../../shared/interfaces/spectral-line.interface';

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
  }

  /**
   * Returns the water column data for a given octile
   * @param option The octile to retrieve data for
   */
  getSpectrum(option: number): any {
    return this.http.get(`http://localhost:8080/spectral-data/${option}`);
  }

  getSplatalogue(): Observable<ISpectralLine[]> {
    return this.http.get<ISpectralLine[]>('http://localhost:8080/spectral-data/splatalogue');
  }
}
