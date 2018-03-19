import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Fov} from '../../../shared/classes/pointings/fov';
import {Pointing} from '../../../shared/classes/pointings/pointing';
import {Rectangle} from '../../../shared/classes/pointings/rectangle';
import {PointingService} from '../../services/pointing.service';


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
            oldMouseEvent: MouseEvent;

  static isInsidePointing(pointing: Pointing, x: number, y: number) {
    if (pointing instanceof Rectangle) {
      const inXBounds = x <= pointing.coordsPixel.topRight[0] &&
                        x >= pointing.coordsPixel.topLeft[0] &&
                        x <= pointing.coordsPixel.bottomRight[0] &&
                        x >= pointing.coordsPixel.bottomLeft[0];
      const inYBounds = y >= pointing.coordsPixel.topLeft[1] &&
                        y >= pointing.coordsPixel.topRight[1] &&
                        y <= pointing.coordsPixel.bottomLeft[1] &&
                        y <= pointing.coordsPixel.bottomRight[1];
      return inXBounds && inYBounds;
    } else if (pointing instanceof Fov) {
      return Math.sqrt((x - pointing.coordsPixel[0]) * (x - pointing.coordsPixel[0]) +
                       (y - pointing.coordsPixel[1]) * (y - pointing.coordsPixel[1]))
             < pointing.radiusPixel;
    }
  }

  static mouseHasMoved(oldEvent: MouseEvent, newEvent: MouseEvent): boolean {
    if (oldEvent) {
      return oldEvent.offsetX !== newEvent.offsetX || oldEvent.offsetY !== newEvent.offsetY;
    }
    return false;
  }

  constructor(private pointingService: PointingService) {
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
      const fov       = new Fov();
      fov.coordsPixel = [event.offsetX, event.offsetY];
      fov.radiusPixel = 25;
      this.drawCircle(fov);
      this.pointingService.addPointing(fov);
      this.fovAddedEmitter.emit();
    } else if (this.addingRec) {
      const dimension = 25;
      const rect      = new Rectangle(false, false, null, {
        topLeft: [event.offsetX - dimension, event.offsetY - dimension],
        topRight: [event.offsetX + dimension, event.offsetY - dimension],
        bottomLeft: [event.offsetX - dimension, event.offsetY + dimension],
        bottomRight: [event.offsetX + dimension, event.offsetY + dimension]
      });
      this.drawPolygon(rect);
      this.pointingService.addPointing(rect);
      this.rectAddedEmitter.emit();
    }
  }

  redraw() {
    this.clearCanvas();
    this.pointingService.pointings.forEach((pointing: Pointing) => {
      if (pointing instanceof Rectangle) {
        this.drawPolygon(pointing);
      } else if (pointing instanceof Fov) {
        this.drawCircle(pointing);
      }
    });
  }

  drawPolygon(polygon: Rectangle) {
    this.canvas.strokeStyle = polygon.isSelected ? 'red' : 'lime';
    this.canvas.beginPath();
    this.canvas.moveTo(polygon.coordsPixel.topLeft[0], polygon.coordsPixel.topLeft[1]);
    this.canvas.lineTo(polygon.coordsPixel.topRight[0], polygon.coordsPixel.topRight[1]);
    this.canvas.lineTo(polygon.coordsPixel.bottomRight[0], polygon.coordsPixel.bottomRight[1]);
    this.canvas.lineTo(polygon.coordsPixel.bottomLeft[0], polygon.coordsPixel.bottomLeft[1]);
    this.canvas.closePath();
    this.canvas.stroke();
  }

  drawCircle(fov: Fov) {
    this.canvas.strokeStyle = fov.isSelected ? 'red' : 'lime';
    this.canvas.beginPath();
    this.canvas.arc(fov.coordsPixel[0], fov.coordsPixel[1], fov.radiusPixel, 0, 2 * Math.PI, false);
    this.canvas.closePath();
    this.canvas.stroke();
  }

  editMode() {
    this.clearCanvas();
    this.pointingService.pointings.forEach((pointing: Pointing) => {
      if (pointing instanceof Rectangle) {
        this.drawPolygon(pointing);
      } else if (pointing instanceof Fov) {
        this.drawCircle(pointing);
      }
    });
  }

  clearCanvas() {
    this.canvas.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }

  cutPolygons() {
    this.pointingService.cutPolygons();
    this.redraw();
  }

  mousedown(event: MouseEvent) {
    this.pointingService.pointings.forEach(polygon => {
      if (PointingCanvasComponent.isInsidePointing(polygon, event.offsetX, event.offsetY)) {
        polygon.isDragging = true;
        polygon.isSelected = !polygon.isSelected;
      }
    });
    this.oldMouseEvent = event;
  }

  mouseup(event: MouseEvent) {
    this.pointingService.pointings.forEach(polygon => {
      if (PointingCanvasComponent.isInsidePointing(polygon, event.offsetX, event.offsetY)) {
        const oldPolygon   = polygon;
        polygon.isDragging = false;
        this.pointingService.updatePointing(oldPolygon, polygon);
      }
    });
    this.redraw();
  }

  mousemove(event: MouseEvent) {
    this.pointingService.pointings.forEach((polygon: Pointing) => {
      if (polygon.isDragging) {
        polygon.isSelected = true;
        if (polygon instanceof Rectangle) {
          const corners     = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
          const movements   = ['movementX', 'movementY'];
          const newPointing = polygon;
          newPointing.coordsPixel.topLeft[1] += event.movementY;
          newPointing.coordsPixel.topLeft[0] += event.movementX;
          newPointing.coordsPixel.topRight[0] += event.movementX;
          newPointing.coordsPixel.topRight[1] += event.movementY;
          newPointing.coordsPixel.bottomLeft[0] += event.movementX;
          newPointing.coordsPixel.bottomLeft[1] += event.movementY;
          newPointing.coordsPixel.bottomRight[0] += event.movementX;
          newPointing.coordsPixel.bottomRight[1] += event.movementY;
          this.pointingService.updatePointing(polygon, newPointing);
        } else if (polygon instanceof Fov) {
          polygon.coordsPixel[0] += event.movementX;
          polygon.coordsPixel[1] += event.movementY;
        }
        this.redraw();
      }
    });
    if (PointingCanvasComponent.mouseHasMoved(this.oldMouseEvent, event)) {
      this.oldMouseEvent = event;
    }
  }
}