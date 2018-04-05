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
    fov: 0.95,
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

  addPointing(ra: number, dec: number) {
    this._overlay.add(A.circle(ra, dec, 0.00583333, {color: '#FFAA00'}));
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

  showPointings() {
    this._overlay.isShowing = true;
    this._catalogue.reportChange();
  }

  hidePointings() {
    this._overlay.isShowing = false;
    this._catalogue.reportChange();
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
