/*
 * ALMA - Atacama Large Millimeter Array
 * Copyright (c) UKATC - UK Astronomy Technology Centre, Science and Technology Facilities Council, 2018
 * (in the framework of the ALMA collaboration).
 * All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307  USA
 */

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

  degToPix(value: number): number {
    return this.coordsWorldToPix([value, 0])[1]
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
    const rectCentreLonDeg = Object.assign(new Longitude, rect.centre.longitude).getValueInUnits(LongitudeUnits.DEG) * 1.8;
    const rectCentreLatDeg = Object.assign(new Latitude, rect.centre.latitude).getValueInUnits(LatitudeUnits.DEG) * 1.05;
    console.log(`rect lon before convert: ${rect.centre.longitude.content} ${rect.centre.longitude.unit}`);
    console.log(`rect lat before convert: ${rect.centre.latitude.content} ${rect.centre.latitude.unit}`);
    console.log(`rect lon after convert: ${rectCentreLonDeg} ${LongitudeUnits.DEG}`);
    console.log(`rect lat after convert: ${rectCentreLatDeg} ${LatitudeUnits.DEG}`);
    const rectShort = Object.assign(new Angle, rect.short).getValueInUnits(AngleUnits.DEG);
    const rectLong = Object.assign(new Angle, rect.long).getValueInUnits(AngleUnits.DEG);

    let actualLon;
    let actualLat;
    if (rect.centre.type === 'RELATIVE') {
      actualLon = targetLonDeg + rectCentreLonDeg;
      actualLat = targetLatDeg + rectCentreLatDeg;
    } else if (rect.centre.type === 'ABSOLUTE') {
      actualLon = rectCentreLonDeg;
      actualLat = rectCentreLatDeg;
    }

    const p1 = {
      x: actualLon - rectLong * Math.sin(rect.palong.content),
      y: actualLat - rectShort / 2 * Math.cos(rect.palong.content)
    };  // Bottom Left
    const p2 = {
      x: actualLon + rectLong * Math.cos(rect.palong.content),
      y: actualLat - rectShort / 2 * Math.sin(rect.palong.content)
    };  // Top Left
    const p3 = {
      x: actualLon + rectLong * Math.sin(rect.palong.content),
      y: actualLat + rectShort / 2 * Math.cos(rect.palong.content)
    };  // Top Right
    const p4 = {
      x: actualLon - rectLong * Math.cos(rect.palong.content),
      y: actualLat + rectShort / 2 * Math.sin(rect.palong.content)
    };  // Bottom Right
    // draw
    this._overlay.addFootprints([A.polygon([[p1.x, p1.y], [p2.x, p2.y], [p3.x, p3.y], [p4.x, p4.y]])]);
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
