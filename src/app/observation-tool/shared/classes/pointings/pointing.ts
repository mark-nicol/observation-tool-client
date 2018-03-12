export abstract class Pointing {

  private _isSelected: boolean;
  private _isDragging: boolean;
  protected abstract _coordsWorld?: any;
  protected abstract _coordsPixel?: any;

  get isDragging(): boolean {
    return this._isDragging;
  }

  set isDragging(value: boolean) {
    this._isDragging = value;
  }

  get isSelected(): boolean {
    return this._isSelected;
  }

  set isSelected(value: boolean) {
    this._isSelected = value;
  }

  abstract get coordsWorld();

  abstract set coordsWorld(value);

  abstract get coordsPixel();

  abstract set coordsPixel(value: any);

  constructor(isSelected?: boolean, isDragging?: boolean) {
    this.isSelected = isSelected || false;
    this.isDragging = isDragging || false;
  }
}
