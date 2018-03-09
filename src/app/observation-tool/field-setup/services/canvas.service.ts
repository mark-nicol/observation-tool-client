import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {Fov} from '../../shared/classes/pointings/fov';
import {Pointing} from '../../shared/classes/pointings/pointing';
import {Rectangle} from '../../shared/classes/pointings/rectangle';

@Injectable()
export class CanvasService {

  private _polygons: Pointing[] = [];

  constructor() {
  }

  get polygons(): any[] {
    return this._polygons;
  }

  set polygons(polygons: any[]) {
    this._polygons = polygons;
  }

  addPolygon(polygon: Rectangle) {
    this._polygons.push(polygon);
  }

  addFov(fov: Fov) {
    this._polygons.push(fov);
  }

  clearPolygons() {
    this._polygons = [];
  }

  updateSkyCoords(polygonPx: Rectangle, polygonWorld: Rectangle) {
    if (this._polygons[this._polygons.indexOf(polygonPx)].coordsWorld.topLeft) {
      this._polygons[this._polygons.indexOf(polygonPx)].coordsWorld.topLeft     = polygonWorld.coordsWorld.topLeft;
      this._polygons[this._polygons.indexOf(polygonPx)].coordsWorld.topRight    = polygonWorld.coordsWorld.topRight;
      this._polygons[this._polygons.indexOf(polygonPx)].coordsWorld.bottomLeft  = polygonWorld.coordsWorld.bottomLeft;
      this._polygons[this._polygons.indexOf(polygonPx)].coordsWorld.bottomRight = polygonWorld.coordsWorld.bottomRight;
    } else {
      this._polygons[this._polygons.indexOf(polygonPx)] = _.merge(polygonPx, polygonWorld);
    }
  }

  updatePolygon(polygonOriginal: Rectangle, polygonNew: Rectangle) {
    console.log('update');
    this._polygons[this._polygons.indexOf(polygonOriginal)] = polygonNew;
  }

  cutPolygons() {
    this._polygons.forEach(polygon => {
      if (polygon.isSelected) {
        this._polygons.splice(this._polygons.indexOf(polygon), 1);
      }
    })
  }

}
