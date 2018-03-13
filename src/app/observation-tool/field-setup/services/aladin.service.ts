import {Injectable} from '@angular/core';
import {IAladinConfig} from '../../shared/interfaces/aladin/aladin-config.interface';
import {IAladinOverlay} from '../../shared/interfaces/aladin/overlay.interface';

declare let A: any;

@Injectable()
export class AladinService {

  private _aladin;
  private _overlay: IAladinOverlay;
  private _catalogue;
          _initialConfig: IAladinConfig = {
            cooFrame: 'ICRS',
            survey: 'P/DSS2/color',
            fov: 2,
            showReticle: true,
            showZoomControl: false,
            showLayersControl: true,
            showGotoControl: false,
            showShareControl: false,
            showFrame: false,
            fullScreen: false,
            reticleColor: 'rgb(178, 50, 178)',
            reticleSize: 22,
          };

  constructor() {
  }

  initAladin() {
    this._aladin    = A.aladin('#aladin-lite-div', this._initialConfig);
    this._catalogue = A.catalog({
      name: 'Pointing Catalogue',
      shape: 'cross',
      sourceSize: 20
    });
    this._aladin.addCatalog(this._catalogue);
    this._overlay = A.graphicOverlay({color: '#FFAA00', lineWidth: 3});
    this._aladin.addOverlay(this._overlay);
  }

  goToRaDec(ra: number, dec: number) {
    this._aladin.gotoRaDec(ra, dec);
  }

  coordsPixToWorld(x: number, y: number): number[] {
    return this._aladin.pix2world(x, y);
  }

  get RaDec(): number[] {
    return this._aladin.getRaDec();
  }

}
