import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {Pointing} from '../../shared/classes/pointings/pointing';
import {Rectangle} from '../../shared/classes/pointings/rectangle';

@Injectable()
export class CanvasService {

  private _pointings: Pointing[] = [];

  constructor() {
  }

  get pointings(): Pointing[] {
    return this._pointings;
  }

  set pointings(pointings: Pointing[]) {
    this._pointings = pointings;
  }

  addPointing(pointing: Pointing) {
    this._pointings.push(pointing);
  }

  updateSkyCoords(polygonPx: Pointing, polygonWorld: Pointing) {
    if (this._pointings[this._pointings.indexOf(polygonPx)].coordsWorld.topLeft) {
      this._pointings[this._pointings.indexOf(polygonPx)].coordsWorld.topLeft     = polygonWorld.coordsWorld.topLeft;
      this._pointings[this._pointings.indexOf(polygonPx)].coordsWorld.topRight    = polygonWorld.coordsWorld.topRight;
      this._pointings[this._pointings.indexOf(polygonPx)].coordsWorld.bottomLeft  = polygonWorld.coordsWorld.bottomLeft;
      this._pointings[this._pointings.indexOf(polygonPx)].coordsWorld.bottomRight = polygonWorld.coordsWorld.bottomRight;
    } else {
      this._pointings[this._pointings.indexOf(polygonPx)] = _.merge(polygonPx, polygonWorld);
    }
  }

  updatePointing(pointingOriginal: Pointing, pointingNew: Pointing) {
    this._pointings[this._pointings.indexOf(pointingOriginal)] = pointingNew;
  }

  cutPolygons() {
    this._pointings.forEach(polygon => {
      if (polygon.isSelected) {
        this._pointings.splice(this._pointings.indexOf(polygon), 1);
      }
    })
  }

}
