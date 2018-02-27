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
  }

  click(event: MouseEvent) {
    if (this.addingFov) {
      this.drawCircle(event.offsetX, event.offsetY, 50);
      this.fovAddedEmitter.emit();
    }
    if (this.addingRec) {
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
        }
      };
      this.drawPolygon(poly);
      this.canvasService.addPolygon(poly);
      this.rectAddedEmitter.emit();
    }
  }

  drawPolygon(polygon: ISkyPolygon) {
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

}
