import {Injectable} from '@angular/core';
import * as _ from 'lodash';


export interface ISkyPolygon {
  topLeft: {
    worldCoords?: number[],
    pxCoords?: number[]
  },
  topRight: {
    worldCoords?: number[],
    pxCoords?: number[]
  },
  bottomRight: {
    worldCoords?: number[],
    pxCoords?: number[]
  },
  bottomLeft: {
    worldCoords?: number[],
    pxCoords?: number[]
  }
}


@Injectable()
export class CanvasService {

  private _polygons: ISkyPolygon[] = [
  ];

  constructor() {
  }

  get polygons(): ISkyPolygon[] {
    return this._polygons;
  }

  addPolygon(polygon: ISkyPolygon) {
    console.log('addPolygon', polygon);
    this._polygons.push(polygon);
  }

  clearPolygons() {
    this._polygons = [];
  }

  addSkyCoords(polygonPx: ISkyPolygon, polygonWorld: ISkyPolygon) {
    this._polygons[this._polygons.indexOf(polygonPx)] = _.merge(polygonPx, polygonWorld);
  }

  getPolygonAtPoint(polygon: ISkyPolygon) {

  }

}
