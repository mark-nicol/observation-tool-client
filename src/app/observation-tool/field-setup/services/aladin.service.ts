import {Injectable} from '@angular/core';
import {IAladinConfig} from '../../shared/interfaces/aladin/aladin-config.interface';
import {IAladinOverlay} from '../../shared/interfaces/aladin/overlay.interface';
import {LongitudeUnits} from '../../../units/enums/longitude-units.enum';
import {LatitudeUnits} from '../../../units/enums/latitude-units.enum';
import {Longitude} from '../../../units/classes/longitude';
import {Latitude} from '../../../units/classes/latitude';
import {Angle} from '../../../units/classes/angle';
import {AngleUnits} from '../../../units/enums/angle-units.enum';
import {ISkyCoordinates} from '../../shared/interfaces/apdm/sky-coordinates.interface';
import {IRectangle} from '../../shared/interfaces/apdm/rectangle.interface';

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
  private _radius = 0.00583333;

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
    this._overlay.add(A.circle(ra, dec, this._radius, {color: '#FFAA00'}));
  }

  addRectangle(target: ISkyCoordinates, rect: IRectangle) {
    const targetLonDeg = Object.assign(new Longitude, target.longitude).getValueInUnits(LongitudeUnits.DEG);
    const targetLatDeg = Object.assign(new Latitude, target.latitude).getValueInUnits(LatitudeUnits.DEG);
    const rectCentreLonDeg = Object.assign(new Longitude, rect.centre.longitude).getValueInUnits(LongitudeUnits.DEG);
    const rectCentreLatDeg = Object.assign(new Latitude, rect.centre.latitude).getValueInUnits(LatitudeUnits.DEG);
    const shortDeg = Object.assign(new Angle, rect._short).getValueInUnits(AngleUnits.DEG);
    const longDeg = Object.assign(new Angle, rect._long).getValueInUnits(AngleUnits.DEG);
    // top left
    // x = centre - half short
    // y = centre - half long
    const topLeft = [
      (targetLonDeg + rectCentreLonDeg) - (shortDeg / 2),
      (targetLatDeg + rectCentreLatDeg) - (longDeg / 2)
    ];
    // top right
    // x = centre + half short
    // y = centre - half long
    const topRight = [
      (targetLonDeg + rectCentreLonDeg) + (shortDeg / 2),
      (targetLatDeg + rectCentreLatDeg) - (longDeg / 2)
    ];
    // bottom right
    // x = centre + half short
    // y = centre + half long
    const bottomRight = [
      (targetLonDeg + rectCentreLonDeg) + (shortDeg / 2),
      (targetLatDeg + rectCentreLatDeg) + (longDeg / 2)
    ];
    // bottom left
    // x = centre - half short
    // y = centre + half long
    const bottomLeft = [
      (targetLonDeg + rectCentreLonDeg) - (shortDeg / 2),
      (targetLatDeg + rectCentreLatDeg) + (longDeg / 2)
    ];
    // draw
    this._overlay.addFootprints([A.polygon([topLeft, topRight, bottomRight, bottomLeft])]);
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

  // calculateRadiusPixel(fov: Fov): number {
  //   const sidePointPixel = this.coordsWorldToPix([fov.coordsWorld[0] + (fov.radiusWorld * 3.6 /*Hack job*/),
  //     fov.coordsWorld[1]]);
  //   return fov.coordsPixel[0] - sidePointPixel[0];
  // }
  //
  // calculateRadiusWorld(fov: Fov): number {
  //   const sidePointWorld = this.coordsPixToWorld([fov.coordsPixel[0] + fov.radiusPixel, fov.coordsPixel[1]]);
  //   return AladinService.calculateDistanceBetweenPoints(fov.coordsWorld, sidePointWorld);
  // }

  getCanvasRadius(): number {
    // Get centre
    const centre = this.getRaDec();
    // Get point +sky radius right of centre
    const right = [centre[0] + (this._radius * 3.6), centre[1]];
    // convert points to px
    const pxCentre = this.coordsWorldToPix(centre);
    const pxRight = this.coordsWorldToPix(right);
    // return difference
    return pxCentre[0] - pxRight[0];
  }
}
