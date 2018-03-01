import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CanvasService, ISkyFov, ISkyPolygon} from '../../services/canvas.service';


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

  static isInsidePolygon(polygon: ISkyPolygon, x: number, y: number) {
    const inXBounds = x <= polygon.topRight.pxCoords[0] &&
                      x >= polygon.topLeft.pxCoords[0] &&
                      x <= polygon.bottomRight.pxCoords[0] &&
                      x >= polygon.bottomLeft.pxCoords[0];
    const inYBounds = y >= polygon.topLeft.pxCoords[1] &&
                      y >= polygon.topRight.pxCoords[1] &&
                      y <= polygon.bottomLeft.pxCoords[1] &&
                      y <= polygon.bottomRight.pxCoords[1];
    return inXBounds && inYBounds;
  }

  constructor(private canvasService: CanvasService) {
  }

  ngOnInit() {
    this.canvasContainer      = document.getElementById('canvas-container');
    this.canvasElement        = document.createElement('canvas');
    this.canvas               = this.canvasElement.getContext('2d');
    this.canvasElement.width  = this.canvasContainer.clientWidth;
    this.canvasElement.height = this.canvasContainer.clientHeight;
    this.canvasContainer.appendChild(this.canvasElement);
  }

  click(event: MouseEvent) {
    if (this.addingFov) {
      const fov: ISkyFov = {
        pxCoords: [event.offsetX, event.offsetY],
        radius: 50
      };
      this.drawCircle(event.offsetX, event.offsetY, 50);
      this.canvasService.addFov(fov);
      this.fovAddedEmitter.emit();
    } else if (this.addingRec) {
      const dimension         = 50;
      const poly: ISkyPolygon = {
        topLeft: {
          pxCoords: [event.offsetX - dimension / 2, event.offsetY - dimension / 2]
        },
        topRight: {
          pxCoords: [event.offsetX + dimension / 2, event.offsetY - dimension / 2]
        },
        bottomLeft: {
          pxCoords: [event.offsetX - dimension / 2, event.offsetY + dimension / 2]
        },
        bottomRight: {
          pxCoords: [event.offsetX + dimension / 2, event.offsetY + dimension / 2]
        },
        color: 'lime'
      };
      this.drawPolygon(poly);
      this.canvasService.addPolygon(poly);
      this.rectAddedEmitter.emit();
    } else if (this.canvasService.polygons.length > 0) {
      this.canvasService.polygons.forEach(polygon => {
        if (PointingCanvasComponent.isInsidePolygon(polygon, event.offsetX, event.offsetY)) {
          console.log('click in polygon');
        }
      })
    }
  }

  drawPolygon(polygon: ISkyPolygon) {
    this.canvas.strokeStyle = polygon.color;
    this.canvas.beginPath();
    this.canvas.moveTo(polygon.topLeft.pxCoords[0], polygon.topLeft.pxCoords[1]);
    this.canvas.lineTo(polygon.topRight.pxCoords[0], polygon.topRight.pxCoords[1]);
    this.canvas.lineTo(polygon.bottomRight.pxCoords[0], polygon.bottomRight.pxCoords[1]);
    this.canvas.lineTo(polygon.bottomLeft.pxCoords[0], polygon.bottomLeft.pxCoords[1]);
    this.canvas.closePath();
    this.canvas.stroke();
  }

  drawCircle(centreX: number, centreY: number, radius: number) {
    this.canvas.beginPath();
    this.canvas.arc(centreX, centreY, radius, 0, 2 * Math.PI, false);
    this.canvas.stroke();
  }

  editMode() {
    this.clearCanvas();
    this.canvasService.polygons.forEach(polygon => {
      this.drawPolygon(polygon);
    });
  }

  clearCanvas() {
    this.canvas.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }

}
