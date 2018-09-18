/*
 * ALMA - Atacama Large Millimeter Array
 * Copyright (c) UKATC - UK Astronomy Technology Centre, Science and Technology Facilities Council, 2018
 * (in the framework of the ALMA collaboration).
 * All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307  USA
 */

import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import * as d3 from 'd3';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Latitude} from '../../../../units/classes/latitude';
import {LatitudeUnits} from '../../../../units/enums/latitude-units.enum';
import {LongitudeUnits} from '../../../../units/enums/longitude-units.enum';
import {Longitude} from '../../../../units/classes/longitude';
import {AladinService} from '../../services/aladin.service';
import {ITargetParameters} from '../../../shared/interfaces/apdm/target-parameters.interface';
import {ISinglePoint} from '../../../shared/interfaces/apdm/single-point.interface';
import {IRectangle} from '../../../shared/interfaces/apdm/rectangle.interface';
import {AngleUnits} from '../../../../units/enums/angle-units.enum';
import {Angle} from '../../../../units/classes/angle';


/**
 * Interface for chart margins
 */
interface Margin {
  /** Top margin */
  top: number,
  /** Right margin */
  right: number,
  /** Bottom margin */
  bottom: number,
  /** Left margin */
  left: number
}

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
  private _drawArea: any;
  private _xScale: any;
  private _yScale: any;
  private _xAxis: any;
  private _yAxis: any;
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
    if (this.form.value.fields[0]['@type'] === 'SinglePointT') {
      this.form.value.fields.forEach((point: ISinglePoint) => {
        if (point.centre.type === 'RELATIVE') {
          this.drawPointing(
            this.form.value.sourceCoordinates.longitude.content + Object.assign(
            new Longitude,
            point.centre.longitude).getValueInUnits(LongitudeUnits.DEG),
            this.form.value.sourceCoordinates.latitude.content + Object.assign(new Latitude, point.centre.latitude).getValueInUnits(LatitudeUnits.DEG)
          );
        } else {
          this.drawPointing(Object.assign(new Longitude, point.centre.longitude).getValueInUnits(LongitudeUnits.DEG), Object.assign(new Latitude, point.centre.latitude).getValueInUnits(LatitudeUnits.DEG));
        }
      });
    } else if (this.form.value.fields[0]['@type'] === 'RectangleT') {
      this.drawRectangle(this.form.value.fields[0]);
    }
    this.observeFormChanges();
  }

  setupSvg() {
    const element = this.canvasContainer.nativeElement;
    this.width = element.offsetWidth;
    this.height = element.offsetHeight;

    this.svg = d3.select(element).append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    const fovCorners = this.aladinService.getFovCorners();

    this._xScale = d3.scaleLinear()
      .range([this.width, 0])
      .domain([d3.min(fovCorners, d => d[0]), d3.max(fovCorners, d => d[0])]);

    this._yScale = d3.scaleLinear()
      .range([this.height, 0])
      .domain([d3.min(fovCorners, d => d[1]), d3.max(fovCorners, d => d[1])]);

    this._drawArea = this.svg.append('g').attr('class', 'draw-area');
    this._drawArea.append('circle')
      .attr('cx', this._xScale(this.form.value.sourceCoordinates.longitude.content))
      .attr('cy', this._yScale(this.form.value.sourceCoordinates.latitude.content))
      .attr('r', this.aladinService.getCanvasRadius())
      .style('stroke', 'lime')
      .style('fill', 'none');
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
    this._drawArea.append('circle')
      .attr('cx', this._xScale(ra))
      .attr('cy', this._yScale(dec))
      .attr('r', this.aladinService.getCanvasRadius())
      .attr('fill', 'none')
      .style('stroke-width', '2px')
      .style('stroke', 'lime');
  }

  drawRectangle(rect: IRectangle) {
    const targetLon = Object.assign(new Longitude, this.form.value.sourceCoordinates.longitude).getValueInUnits(LongitudeUnits.DEG);
    const targetLat = Object.assign(new Latitude, this.form.value.sourceCoordinates.latitude).getValueInUnits(LatitudeUnits.DEG);
    let rectLon = Object.assign(new Longitude, rect.centre.longitude).getValueInUnits(LongitudeUnits.DEG);
    let rectLat = Object.assign(new Latitude, rect.centre.latitude).getValueInUnits(LatitudeUnits.DEG);
    rectLon = rectLon  * (1 + Math.cos(rectLat));
    rectLat = rectLat * (1 + Math.sin(rectLon));
    const rectShort = Object.assign(new Angle, rect.short).getValueInUnits(AngleUnits.DEG);
    const rectLong = Object.assign(new Angle, rect.long).getValueInUnits(AngleUnits.DEG);
    const rectAngle = Object.assign(new Angle, rect.palong).getValueInUnits(AngleUnits.RAD);
    let actualCentreLon, actualCentreLat;
    if (rect.centre.type === 'RELATIVE') {
      actualCentreLon = targetLon + rectLon;
      actualCentreLat = targetLat + rectLat;
    } else if (rect.centre.type === 'ABSOLUTE') {
      actualCentreLon = rectLon;
      actualCentreLat = rectLat;
    }
    this._drawArea.append('circle')
      .attr('cx', this._xScale(actualCentreLon))
      .attr('cy', this._yScale(actualCentreLat))
      .attr('r', 10)
      .style('stroke', 'lime');
    // this._drawArea.append('rect')
    //   .attr('x', this._xScale(actualCentreLon))
    //   .attr('y', this._yScale(actualCentreLat))
    //   .attr('width', this._xScale(rectLong))
    //   .attr('height', this._yScale(rectShort))
    //   .attr('transform', `rotate(${rectAngle})`);
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
        value.fields.forEach((point: ISinglePoint) => {
          this.drawPointing(
            value.sourceCoordinates.longitude.content + Object.assign(new Longitude, point.centre.longitude).getValueInUnits(LongitudeUnits.DEG),
            value.sourceCoordinates.latitude.content + Object.assign(new Latitude, point.centre.latitude).getValueInUnits(LatitudeUnits.DEG)
          );
        });
      }
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
      prj_name: '',
      prj_centre: this.formBuilder.group({
        val_longitude: this.formBuilder.group({
          unit: this.form.value.SinglePoint[0].centre.longitude.unit,
          content: ra ?
            [ra.getValueInUnits(this.form.value.SinglePoint[0].centre.longitude.unit), Validators.required] :
            [0.0, Validators.required]
        }),
        val_latitude: this.formBuilder.group({
          unit: this.form.value.SinglePoint[0].centre.longitude.unit,
          content: dec ?
            [dec.getValueInUnits(this.form.value.SinglePoint[0].centre.longitude.unit), Validators.required] :
            [0.0, Validators.required]
        }),
        val_fieldName: `Field-${this.singlePoint.length + 1}`
      })
    }));
  }

  isInsidePointing(pointing: ISinglePoint, x: number, y: number) {
    const centrePx = this.aladinService.coordsWorldToPix([
      Object.assign(new Longitude, pointing.centre.longitude).getValueInUnits(LongitudeUnits.DEG),
      Object.assign(new Latitude, pointing.centre.latitude).getValueInUnits(LatitudeUnits.DEG)
    ]);
    return Math.sqrt((x - centrePx[0]) * (x - centrePx[0]) +
      (y - centrePx[1]) * (y - centrePx[1]))
      < this.aladinService.getCanvasRadius();

  }
}
