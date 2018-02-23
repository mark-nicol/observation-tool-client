import {Injectable} from '@angular/core';


export interface ICanvasRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}


@Injectable()
export class CanvasService {

  private _objects: ICanvasRectangle[] = [{x: 0, y: 0, width: 50, height: 50}];

  constructor() {
  }

  get objects(): ICanvasRectangle[] {
    return this._objects;
  }

  addObject(object: any) {
    this._objects.push(object);
  }

}
