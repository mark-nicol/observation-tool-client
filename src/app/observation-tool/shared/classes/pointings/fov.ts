import {Pointing} from './pointing';

export class Fov extends Pointing {

  _coordsPixel?: number[];
  _coordsWorld?: number[];
  _radiusPixel?: number;
  _radiusWorld?: number;

  get coordsPixel(): number[] {
    return this._coordsPixel;
  };

  set coordsPixel(value: number[]) {
    this._coordsPixel = value;
  }

  get coordsWorld() {
    return this._coordsWorld;
  }

  set coordsWorld(value: number[]) {
    this._coordsWorld = value;
  }

  get radiusPixel(): number {
    return this._radiusPixel;
  }

  set radiusPixel(value: number) {
    this._radiusPixel = value;
  }

  get radiusWorld(): number {
    return this._radiusWorld;
  }

  set radiusWorld(value: number) {
    this._radiusWorld = value;
  }

  constructor(isSelected?: boolean,
              isDragging?: boolean,
              coordsWorld?: number[],
              coordsPixel?: number[],
              radiusWorld?: number,
              radiusPixel?: number) {
    super(isSelected, isDragging);
    this.coordsWorld = coordsWorld || [];
    this.coordsPixel = coordsPixel || [];
    this.radiusWorld = radiusWorld || 0;
    this.radiusPixel = radiusPixel || 0;
  }
}
