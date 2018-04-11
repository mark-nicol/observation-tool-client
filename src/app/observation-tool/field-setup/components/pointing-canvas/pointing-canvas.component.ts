import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import * as d3 from 'd3';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
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
    this.form.value.prj_SinglePoint.forEach((point: ISinglePoint) => {
      this.drawPointing(
        this.form.value.prj_sourceCoordinates.val_longitude.content + Object.assign(
        new Longitude,
        point.prj_centre.val_longitude).getValueInUnits(LongitudeUnits.DEG),
        this.form.value.prj_sourceCoordinates.val_latitude.content + Object.assign(new Latitude, point.prj_centre.val_latitude).getValueInUnits(LatitudeUnits.DEG)
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
        worldClick[0] - Object.assign(new Longitude, this.form.value.prj_sourceCoordinates.val_longitude).getValueInUnits(LongitudeUnits.DEG));
      const latDiff = new Latitude(
        LatitudeUnits.DEG,
        worldClick[1] - Object.assign(new Latitude, this.form.value.prj_sourceCoordinates.val_latitude).getValueInUnits(LatitudeUnits.DEG)
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
      .attr('r', this.aladinService.getCanvasRadius())
      .attr('fill', 'none')
      .style('stroke-width', '2px')
      .style('stroke', 'lime');
  }

  cutPolygons() {
  }

  mousedown(event: MouseEvent) {
    // this.singlePoint.controls.forEach(control => console.log(this.isInsidePointing(control.value, event.offsetX, event.offsetY)));
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
      if (this.form.valid) {
        PointingCanvasComponent.clearCanvas();
        value.prj_SinglePoint.forEach((point: ISinglePoint) => {
          this.drawPointing(
            value.prj_sourceCoordinates.val_longitude.content + Object.assign(new Longitude, point.prj_centre.val_longitude).getValueInUnits(LongitudeUnits.DEG),
            value.prj_sourceCoordinates.val_latitude.content + Object.assign(new Latitude, point.prj_centre.val_latitude).getValueInUnits(LatitudeUnits.DEG)
          );
        });
      }
    });
  }

  get singlePoint(): FormArray {
    return this.form.get('prj_SinglePoint') as FormArray;
  }

  removePointing(index: number) {
    this.singlePoint.removeAt(index);
  }

  addPointing(ra?: Longitude, dec?: Latitude) {
    this.singlePoint.push(this.formBuilder.group({
      prj_name: '',
      prj_centre: this.formBuilder.group({
        val_longitude: this.formBuilder.group({
          unit: this.form.value.prj_SinglePoint[0].prj_centre.val_longitude.unit,
          content: ra ?
            [ra.getValueInUnits(this.form.value.prj_SinglePoint[0].prj_centre.val_longitude.unit), Validators.required] :
            [0.0, Validators.required]
        }),
        val_latitude: this.formBuilder.group({
          unit: this.form.value.prj_SinglePoint[0].prj_centre.val_longitude.unit,
          content: dec ?
            [dec.getValueInUnits(this.form.value.prj_SinglePoint[0].prj_centre.val_longitude.unit), Validators.required] :
            [0.0, Validators.required]
        }),
        val_fieldName: `Field-${this.singlePoint.length + 1}`
      })
    }));
  }

  isInsidePointing(pointing: ISinglePoint, x: number, y: number) {
    const centrePx = this.aladinService.coordsWorldToPix([
      Object.assign(new Longitude, pointing.prj_centre.val_longitude).getValueInUnits(LongitudeUnits.DEG),
      Object.assign(new Latitude, pointing.prj_centre.val_latitude).getValueInUnits(LatitudeUnits.DEG)
    ]);
    return Math.sqrt((x - centrePx[0]) * (x - centrePx[0]) +
      (y - centrePx[1]) * (y - centrePx[1]))
      < this.aladinService.getCanvasRadius();

  }
}
