import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CanvasService, ISkyPolygon} from '../../services/canvas.service';


@Component({
  selector: 'app-pointing-canvas',
  templateUrl: './pointing-canvas.component.html',
  styleUrls: ['./pointing-canvas.component.css']
})
export class PointingCanvasComponent implements OnInit {

  @Output() fovAddedEmitter  = new EventEmitter();
  @Output() rectAddedEmitter = new EventEmitter();
            addingRec        = false;
            addingFov        = false;
            canvasElement: HTMLCanvasElement;
            canvas: CanvasRenderingContext2D;
            canvasContainer: any;

  constructor(private canvasService: CanvasService) {
  }

  ngOnInit() {
    this.canvasContainer      = document.getElementById('canvas-container');
    this.canvasElement        = document.createElement('canvas');
    this.canvas               = this.canvasElement.getContext('2d');
    this.canvasElement.width  = this.canvasContainer.clientWidth;
    this.canvasElement.height = this.canvasContainer.clientHeight;
    this.canvasContainer.appendChild(this.canvasElement);
    this.canvas.strokeStyle = 'lime';
    this.canvasService.polygons.forEach(polygon => this.drawPolygon(polygon));
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
    // this.canvasService.addObject({x: centreX - lengthSize / 2, y: centreY - lengthSize / 2, width: lengthSize, height: lengthSize});
    this.canvas.strokeRect(centreX - lengthSize / 2, centreY - lengthSize / 2, lengthSize, lengthSize);
  }

  drawPolygon(polygon: ISkyPolygon) {
    this.canvas.beginPath();
    this.canvas.moveTo(polygon.topLeft.pxCoords.x, polygon.topLeft.pxCoords.y);
    this.canvas.lineTo(polygon.topRight.pxCoords.x, polygon.topRight.pxCoords.y);
    this.canvas.lineTo(polygon.bottomRight.pxCoords.x, polygon.bottomRight.pxCoords.y);
    this.canvas.lineTo(polygon.bottomLeft.pxCoords.x, polygon.bottomLeft.pxCoords.y);
    this.canvas.closePath();
    this.canvas.stroke();
  }

  drawCircle(centreX: number, centreY: number, radius: number) {
    this.canvas.beginPath();
    this.canvas.arc(centreX, centreY, radius, 0, 2 * Math.PI, false);
    this.canvas.stroke();
  }

}
