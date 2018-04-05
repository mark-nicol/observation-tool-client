import {Injectable} from '@angular/core';
import {Fov} from '../../shared/classes/pointings/fov';
import {Rectangle} from '../../shared/classes/pointings/rectangle';
import {IAladinConfig} from '../../shared/interfaces/aladin/aladin-config.interface';
import {IAladinOverlay} from '../../shared/interfaces/aladin/overlay.interface';

declare let A: any;
declare let Coo: any;

@Injectable()
export class AladinService {

  private _aladin;
  private _overlay: IAladinOverlay;
  private _catalogue;
  private _initialConfig: IAladinConfig = {
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
  private zoomStep = 1.5;
  private defaultFov = 4;

  static calculateDistanceBetweenPoints(pointA: number[], pointB: number[]): number {
    return new Coo(pointA[0], pointA[1], 8).distance(new Coo(pointB[0], pointB[1], 8));
  }

  constructor() {
  }

  initAladin() {
    this._aladin = A.aladin('#aladin-lite-div', this._initialConfig);
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

  getRaDec(): number[] {
    return this._aladin.getRaDec();
  }

  adjustFovForObject(objectName: string) {
    this._aladin.adjustFovForObject(objectName);
  }

  coordsPixToWorld(coordsPix: number[]): number[] {
    return this._aladin.pix2world(coordsPix[0], coordsPix[1]);
  }

  coordsWorldToPix(coordsWorld: number[]): number[] {
    return this._aladin.world2pix(coordsWorld[0], coordsWorld[1]);
  }

  get RaDec(): number[] {
    return this._aladin.getRaDec();
  }

  // addPointing(pointing: Pointing) {
  //   if (pointing instanceof Rectangle) {
  //     this.addPolygon(pointing);
  //   } else if (pointing instanceof Fov) {
  //     this.addFov(pointing);
  //   }
  // }

  addPointing(ra: number, dec: number) {
    this._overlay.add(A.circle(ra, dec, 0.025, {color: '#FFAA00'}));
  }

  private addPolygon(rectangle: Rectangle) {
    if (rectangle.coordsWorld) {
      this._overlay.addFootprints(A.polygon([
        rectangle.coordsWorld.topLeft,
        rectangle.coordsWorld.topRight,
        rectangle.coordsWorld.bottomRight,
        rectangle.coordsWorld.bottomLeft
      ]));
    }
  }

  private addFov(fov: Fov) {
    if (fov.coordsWorld) {
      this._overlay.add(A.circle(fov.coordsWorld[0], fov.coordsWorld[1], fov.radiusWorld, {color: '#FFAA00'}));
    }
  }

  goToObject(objectName: string, ra: number, dec: number) {
    this.goToRaDec(ra, dec);
    this.adjustFovForObject(objectName);
  }

  zoomIn() {
    this._aladin.setFov(this._aladin.getFov()[0] / this.zoomStep);
  }

  zoomOut() {
    this._aladin.setFov(this._aladin.getFov()[0] * this.zoomStep);
  }

  resetZoom() {
    this._aladin.setFov(this.defaultFov);
  }

  clearPointings() {
    this._overlay.overlays = [];
    this._overlay.overlay_items = [];
    this._catalogue.reportChange();
  }

  get footprints(): any[] {
    return this._overlay.overlays;
  }

  get circles(): any[] {
    return this._overlay.overlay_items;
  }

  calculateRadiusPixel(fov: Fov): number {
    const sidePointPixel = this.coordsWorldToPix([fov.coordsWorld[0] + (fov.radiusWorld * 3.6 /*Hack job*/),
      fov.coordsWorld[1]]);
    return fov.coordsPixel[0] - sidePointPixel[0];
  }

  calculateRadiusWorld(fov: Fov): number {
    const sidePointWorld = this.coordsPixToWorld([fov.coordsPixel[0] + fov.radiusPixel, fov.coordsPixel[1]]);
    return AladinService.calculateDistanceBetweenPoints(fov.coordsWorld, sidePointWorld);
  }
}
