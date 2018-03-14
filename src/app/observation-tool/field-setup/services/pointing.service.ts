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

  private checkFov(fov: Fov): Fov {
    if (!fov.coordsPixel) {
      fov.coordsPixel = this.aladinService.coordsPixToWorld(fov.coordsWorld);
    }
    if (!fov.coordsWorld) {
      fov.coordsWorld = this.aladinService.coordsPixToWorld(fov.coordsPixel);
    }
    if (!fov.radiusPixel) {
      console.log('no pixel radius');
      fov.radiusPixel = 25;
    }
    if (!fov.radiusWorld) {
      console.log('no world radius');
      fov.radiusWorld = 0.05;
    }
    return fov;
  }

  updatePointing(pointingOriginal: Pointing, pointingNew: Pointing) {
    if (pointingNew instanceof Rectangle) {
      pointingNew.coordsWorld.topLeft = this.aladinService.coordsPixToWorld(pointingNew.coordsPixel.topLeft);
      pointingNew.coordsWorld.topRight = this.aladinService.coordsPixToWorld(pointingNew.coordsPixel.topRight);
      pointingNew.coordsWorld.bottomLeft = this.aladinService.coordsPixToWorld(pointingNew.coordsPixel.bottomLeft);
      pointingNew.coordsWorld.bottomRight = this.aladinService.coordsPixToWorld(pointingNew.coordsPixel.bottomRight);
    } else if (pointingNew instanceof Fov) {
      pointingNew.coordsWorld = this.aladinService.coordsPixToWorld(pointingNew.coordsPixel);
    }
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
