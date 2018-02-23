import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export interface ICanvasRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

@Component({
  selector: 'app-pointing-canvas',
  templateUrl: './pointing-canvas.component.html',
  styleUrls: ['./pointing-canvas.component.css']
})
export class PointingCanvasComponent implements OnInit {

  @Output() fovAddedEmitter             = new EventEmitter();
  @Output() rectAddedEmitter            = new EventEmitter();
            addingRec                   = false;
            addingFov                   = false;
            canvasElement: HTMLCanvasElement;
            canvas: CanvasRenderingContext2D;
            canvasContainer: any;
            objects: ICanvasRectangle[] = [{x: 0, y: 0, width: 50, height: 50}];

  constructor() {
  }

  ngOnInit() {
    this.canvasContainer      = document.getElementById('canvas-container');
    this.canvasElement        = document.createElement('canvas');
    this.canvas               = this.canvasElement.getContext('2d');
    this.canvasElement.width  = this.canvasContainer.clientWidth;
    this.canvasElement.height = this.canvasContainer.clientHeight;
    this.canvasContainer.appendChild(this.canvasElement);
    this.canvas.strokeStyle = 'lime';
    this.objects.forEach(object => this.canvas.strokeRect(object.x, object.y, object.width, object.height));
  }

  click(event: MouseEvent) {
    if (this.addingFov) {
      this.drawCircle(event.offsetX, event.offsetY, 50);
      this.fovAddedEmitter.emit();
    }
    if (this.addingRec) {
      this.drawMosaic(event.offsetX, event.offsetY);
      this.rectAddedEmitter.emit();
    }
  }

  drawMosaic(centreX: number, centreY: number) {
    const lengthSize = 50;
    this.objects.push({
      x: centreX - lengthSize / 2,
      y: centreY - lengthSize / 2,
      width: lengthSize,
      height: lengthSize
    });
    this.canvas.strokeRect(centreX - lengthSize / 2, centreY - lengthSize / 2, lengthSize, lengthSize);
  }

  drawCircle(centreX: number, centreY: number, radius: number) {
    this.canvas.beginPath();
    this.canvas.arc(centreX, centreY, radius, 0, 2 * Math.PI, false);
    this.canvas.stroke();
  }

}
