import {Injectable} from '@angular/core';
import {Fov} from '../../shared/classes/pointings/fov';
import {Pointing} from '../../shared/classes/pointings/pointing';
import {Rectangle} from '../../shared/classes/pointings/rectangle';
import {AladinService} from './aladin.service';
import {ISinglePoint} from '../../shared/interfaces/project/science-goal/target-parameters.interface';

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

  setPointingsFromSinglePoint(pointings: ISinglePoint[]) {
    this.pointings = pointings.map((pointing: ISinglePoint) => {
      return new Fov(
        false,
        false,
        [
          pointing.centre.longitude.content,
          pointing.centre.latitude.content
        ],
        null,
        25)
    });
    console.log(this._pointings);
  }

  addPointing(pointing: Pointing) {
    if (pointing instanceof Rectangle) {
      pointing = this.checkRec(pointing);
    } else if (pointing instanceof Fov) {
      pointing = this.checkFov(pointing);
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
      fov.radiusPixel = this.aladinService.calculateRadiusPixel(fov);
    }
    if (!fov.radiusWorld) {
      fov.radiusWorld = this.aladinService.calculateRadiusWorld(fov);
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
