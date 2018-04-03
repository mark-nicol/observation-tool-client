import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Fov} from '../../../shared/classes/pointings/fov';
import {Pointing} from '../../../shared/classes/pointings/pointing';
import {Rectangle} from '../../../shared/classes/pointings/rectangle';
import {PointingService} from '../../services/pointing.service';
import * as d3 from 'd3';


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
            oldMouseEvent: MouseEvent;

  @ViewChild('canvasContainer') private canvasContainer: ElementRef;
  private svg: any;
  private width: number;
  private height: number;

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

  static clearCanvas() {
    d3.selectAll('svg > *').remove();
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
    // TODO Init d3
    this.setupSvg();
    function dragged(d) {
      d3.select(this)
        .attr('cx', d.x = d3.event.x)
        .attr('cy', d.y = d3.event.y)
    }
  }

  setupSvg() {
    const element       = this.canvasContainer.nativeElement;
    // Set the width and height of the context chart
    this.width  = element.offsetWidth;
    this.height = element.offsetHeight;
    this.svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);
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
      this.drawRectangle(rect);
      this.pointingService.addPointing(rect);
      this.rectAddedEmitter.emit();
    }
  }

  redraw() {
    PointingCanvasComponent.clearCanvas();
    this.pointingService.pointings.forEach((pointing: Pointing) => {
      if (pointing instanceof Rectangle) {
        this.drawRectangle(pointing);
      } else if (pointing instanceof Fov) {
        this.drawCircle(pointing);
      }
    });
  }

  drawRectangle(rectangle: Rectangle) {
    this.svg.append('polygon')
      .attr('points', () => {
        return [
          rectangle.coordsPixel.topLeft.join(','),
          rectangle.coordsPixel.topRight.join(','),
          rectangle.coordsPixel.bottomRight.join(','),
          rectangle.coordsPixel.bottomLeft.join(','),
        ].join(' ');
      })
      .attr('fill', 'none')
      .attr('stroke-width', '2px')
      .attr('stroke', rectangle.isSelected ? 'red' : 'green');
  }

  drawCircle(fov: Fov) {
    this.svg.append('circle')
      .attr('cx', fov.coordsPixel[0])
      .attr('cy', fov.coordsPixel[1])
      .attr('r', fov.radiusPixel)
      .attr('fill', 'none')
      .style('stroke-width', '2px')
      .style('stroke', fov.isSelected ? 'red' : 'green');
  }

  editMode() {
    PointingCanvasComponent.clearCanvas();
    this.pointingService.pointings.forEach((pointing: Pointing) => {
      if (pointing instanceof Rectangle) {
        this.drawRectangle(pointing);
      } else if (pointing instanceof Fov) {
        this.drawCircle(pointing);
      }
    });
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
