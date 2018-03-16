import {Pointing} from './pointing';

interface IRectangleCoords {
  topLeft: number[];
  topRight: number[];
  bottomLeft: number[];
  bottomRight: number[];
}

export class Rectangle extends Pointing {

  _coordsWorld?: IRectangleCoords;
  _coordsPixel?: IRectangleCoords;

  get coordsWorld(): IRectangleCoords {
    return this._coordsWorld;
  }

  set coordsWorld(value: IRectangleCoords) {
    this._coordsWorld = value;
  }

  get coordsPixel(): IRectangleCoords {
    return this._coordsPixel;
  }

  set coordsPixel(value: IRectangleCoords) {
    this._coordsPixel = value;
  }

  constructor(isSelected?: boolean, isDragging?: boolean, coordsWorld?: IRectangleCoords, coordsPixel?: IRectangleCoords) {
    super(isSelected, isDragging);
    this.coordsWorld = coordsWorld || null;
    this.coordsPixel = coordsPixel || null;
  }

}
