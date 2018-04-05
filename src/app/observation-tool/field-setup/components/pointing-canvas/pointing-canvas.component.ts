import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Fov} from '../../../shared/classes/pointings/fov';
import {Pointing} from '../../../shared/classes/pointings/pointing';
import {Rectangle} from '../../../shared/classes/pointings/rectangle';
import * as d3 from 'd3';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {
  ISinglePoint,
  ITargetParameters
} from '../../../shared/interfaces/project/science-goal/target-parameters.interface';
import {Latitude} from '../../../../units/classes/latitude';
import {LatitudeUnits} from '../../../../units/enums/latitude-units.enum';
import {LongitudeUnits} from '../../../../units/enums/longitude-units.enum';
import {Longitude} from '../../../../units/classes/longitude';
import {AladinService} from '../../services/aladin.service';


@Component({
  selector: 'app-pointing-canvas',
  templateUrl: './pointing-canvas.component.html',
  styleUrls: ['./pointing-canvas.component.css']
})
export class PointingCanvasComponent implements OnInit {

  @Input() form: FormGroup;
  @Output() fovAddedEmitter = new EventEmitter();
  @Output() rectAddedEmitter = new EventEmitter();
  addingRec = false;
  addingFov = false;
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

  constructor(private aladinService: AladinService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.setupSvg();
    this.form.value.SinglePoint.forEach((point: ISinglePoint) => {
      this.drawPointing(
        this.form.value.sourceCoordinates.longitude.content + Object.assign(
        new Longitude,
        point.centre.longitude).getValueInUnits(LongitudeUnits.DEG),
        this.form.value.sourceCoordinates.latitude.content + Object.assign(new Latitude, point.centre.latitude).getValueInUnits(LatitudeUnits.DEG)
      );
    });
    this.observeFormChanges();
  }

  setupSvg() {
    const element = this.canvasContainer.nativeElement;
    this.width = element.offsetWidth;
    this.height = element.offsetHeight;
    this.svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);
  }

  click(event: MouseEvent) {
    if (this.addingFov) {
      const worldClick = this.aladinService.coordsPixToWorld([event.offsetX, event.offsetY]);
      const lonDiff = new Longitude(
        LongitudeUnits.DEG,
        worldClick[0] - Object.assign(new Longitude, this.form.value.sourceCoordinates.longitude).getValueInUnits(LongitudeUnits.DEG));
      const latDiff = new Latitude(
        LatitudeUnits.DEG,
        worldClick[1] - Object.assign(new Latitude, this.form.value.sourceCoordinates.latitude).getValueInUnits(LatitudeUnits.DEG)
      );
      this.addPointing(lonDiff, latDiff);
      this.fovAddedEmitter.emit();
    } else if (this.addingRec) {

      this.rectAddedEmitter.emit();
    }
  }

  redraw() {
  }

  drawPointing(ra: number, dec: number) {
    const worldCoords = this.aladinService.coordsWorldToPix([ra, dec]);
    this.svg.append('circle')
      .attr('cx', worldCoords[0])
      .attr('cy', worldCoords[1])
      .attr('r', 20)
      .attr('fill', 'none')
      .style('stroke-width', '2px')
      .style('stroke', 'lime');
  }

  cutPolygons() {
  }

  mousedown(event: MouseEvent) {
    this.oldMouseEvent = event;
  }

  mouseup(event: MouseEvent) {
    this.redraw();
  }

  mousemove(event: MouseEvent) {
    if (PointingCanvasComponent.mouseHasMoved(this.oldMouseEvent, event)) {
      this.oldMouseEvent = event;
    }
  }

  observeFormChanges() {
    this.form.valueChanges.subscribe((value: ITargetParameters) => {
      PointingCanvasComponent.clearCanvas();
      value.SinglePoint.forEach((point: ISinglePoint) => {
        this.drawPointing(
          value.sourceCoordinates.longitude.content + Object.assign(new Longitude, point.centre.longitude).getValueInUnits(LongitudeUnits.DEG),
          value.sourceCoordinates.latitude.content + Object.assign(new Latitude, point.centre.latitude).getValueInUnits(LatitudeUnits.DEG)
        );
      });
    });
  }

  get singlePoint(): FormArray {
    return this.form.get('SinglePoint') as FormArray;
  }

  removePointing(index: number) {
    this.singlePoint.removeAt(index);
  }

  addPointing(ra?: Longitude, dec?: Latitude) {
    this.singlePoint.push(this.formBuilder.group({
      name: '',
      centre: this.formBuilder.group({
        longitude: this.formBuilder.group({
          unit: this.form.value.SinglePoint[0].centre.longitude.unit,
          content: ra ? ra.getValueInUnits(this.form.value.SinglePoint[0].centre.longitude.unit) : 0.0
        }),
        latitude: this.formBuilder.group({
          unit: this.form.value.SinglePoint[0].centre.longitude.unit,
          content: dec ? dec.getValueInUnits(this.form.value.SinglePoint[0].centre.longitude.unit) : 0.0
        }),
        fieldName: `Field-${this.singlePoint.length + 1}`
      })
    }));
  }
}
