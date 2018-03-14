import {Injectable} from '@angular/core';
import {Fov} from '../../shared/classes/pointings/fov';
import {Pointing} from '../../shared/classes/pointings/pointing';
import {Rectangle} from '../../shared/classes/pointings/rectangle';
import {AladinService} from './aladin.service';

@Injectable()
export class PointingService {

  private _pointings: Pointing[] = [];

  private _corners = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

  constructor(private aladinService: AladinService) {
  }

  get pointings(): Pointing[] {
    return this._pointings;
  }

  set pointings(pointings: Pointing[]) {
    this._pointings = pointings;
  }

  addPointing(pointing: Pointing) {
    if (pointing instanceof Rectangle) {
      pointing = this.checkRec(pointing);
    } else if (pointing instanceof Fov) {
      this.checkFov(pointing);
    }
    this._pointings.push(pointing);
  }

  private checkRec(rectangle: Rectangle): Rectangle {
    if (!rectangle.coordsPixel) {
      rectangle.coordsPixel = {topLeft: null, topRight: null, bottomLeft: null, bottomRight: null};
      this._corners.forEach(corner => {
        rectangle.coordsPixel[corner] = this.aladinService.coordsWorldToPix(rectangle.coordsWorld[corner]);
      });
    }
    if (!rectangle.coordsWorld) {
      rectangle.coordsWorld = {topLeft: null, topRight: null, bottomLeft: null, bottomRight: null};
      this._corners.forEach(corner => {
        rectangle.coordsWorld[corner] = this.aladinService.coordsPixToWorld(rectangle.coordsPixel[corner]);
      });
    }
    return rectangle;
  }

  private checkFov(fov: Fov) {
    if (!fov.coordsPixel) {
      console.log('no pixel coords');
    }
    if (!fov.coordsWorld) {
      console.log('no world coords');
    }
    if (!fov.radiusPixel) {
      console.log('no pixel radius');
    }
    if (!fov.radiusWorld) {
      console.log('no world radius');
    }
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
