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
  },
  isSelected?: false,
  isDragging?: false
}

export interface ISkyFov {
  pxCoords?: number[]
  worldCoords?: number[]
  radius: number
}


@Injectable()
export class CanvasService {

  private _polygons: any[] = [];

  constructor() {
  }

  get polygons(): any[] {
    return this._polygons;
  }

  set polygons(polygons: any[]) {
    this._polygons = polygons;
  }

  addPolygon(polygon: ISkyPolygon) {
    this._polygons.push(polygon);
  }

  addFov(fov: ISkyFov) {
    this._polygons.push(fov);
  }

  clearPolygons() {
    this._polygons = [];
  }

  addSkyCoords(polygonPx: ISkyPolygon, polygonWorld: ISkyPolygon) {
    this._polygons[this._polygons.indexOf(polygonPx)] = _.merge(polygonPx, polygonWorld);
  }

  updatePolygon(polygonOriginal: ISkyPolygon, polygonNew: ISkyPolygon) {
    this._polygons[this._polygons.indexOf(polygonOriginal)] = polygonNew;
  }

  getPolygonAtPoint(polygon: ISkyPolygon) {

  }

  cutPolygons() {
    this._polygons.forEach(polygon => {
      if (polygon.isSelected) {
        this._polygons.splice(this._polygons.indexOf(polygon), 1);
      }
    })
  }

}
