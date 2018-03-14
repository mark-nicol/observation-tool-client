import {Injectable} from '@angular/core';
import {Pointing} from '../../shared/classes/pointings/pointing';

@Injectable()
export class PointingService {

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
    console.log('pushing', pointing);
    this._pointings.push(pointing);
  }

  updateSkyCoords(pointingPx: Pointing, pointingWorld: Pointing) {
    this._pointings[this._pointings.indexOf(pointingPx)].coordsWorld = pointingWorld.coordsWorld;
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
