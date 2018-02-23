import {Injectable} from '@angular/core';


export interface ISkyPolygon {
  topLeft: {
    worldCoords?: { x: number, y: number },
    pxCoords: { x: number, y: number }
  },
  topRight: {
    worldCoords?: { x: number, y: number },
    pxCoords: { x: number, y: number }
  },
  bottomRight: {
    worldCoords?: { x: number, y: number },
    pxCoords: { x: number, y: number }
  },
  bottomLeft: {
    worldCoords?: { x: number, y: number },
    pxCoords: { x: number, y: number }
  }
}


@Injectable()
export class CanvasService {

  private _polygons: ISkyPolygon[] = [
    {
      topLeft: {
        pxCoords: {x: 50, y: 50}
      },
      topRight: {
        pxCoords: {x: 100, y: 50}
      },
      bottomRight: {
        pxCoords: {x: 100, y: 100}
      },
      bottomLeft: {
        pxCoords: {x: 50, y: 100}
      }
    }
  ];

  constructor() {
  }

  get polygons(): ISkyPolygon[] {
    return this._polygons;
  }

  addPolygon(polygon: ISkyPolygon) {
    this._polygons.push(polygon);
  }

  clearPolygons() {
    this._polygons = [];
  }

}
