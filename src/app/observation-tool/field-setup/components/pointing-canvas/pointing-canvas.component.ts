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
    d3.selectAll('pointing').remove();
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
    console.log(this.form.value);
    if (this.form.value.type === 'F_MultiplePoints') {
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
    } else if (this.form.value.type === 'F_SingleRectangle') {
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
      .domain(d3.extent(fovCorners, d => d[0]));

    this._yScale = d3.scaleLinear()
      .range([this.height, 0])
      .domain(d3.extent(fovCorners, d => d[1]));

    this._drawArea = this.svg.append('g').attr('class', 'draw-area');
  }

  click(event: MouseEvent) {
    if (this.addingFov) {
      this.addPointing(this._xScale.invert(event.offsetX), this._yScale.invert(event.offsetY));
      this.fovAddedEmitter.emit();
    } else if (this.addingRec) {
      this.rectAddedEmitter.emit();
    }
  }

  redraw() {
  }

  drawPointing(ra: number, dec: number) {
    this._drawArea.append('circle')
      .attr('class', 'pointing')
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
            Object.assign(new Longitude, point.centre.longitude).getValueInUnits(LongitudeUnits.DEG),
            Object.assign(new Latitude, point.centre.latitude).getValueInUnits(LatitudeUnits.DEG)
          );
        });
      }
    });
  }

  get singlePoint(): FormArray {
    return this.form.get('fields') as FormArray;
  }

  get offsetUnit() {
    if (this.form.value.fields[0]) {
      return this.form.value.fields[0].centre.longitude.unit;
    }
  }

  set offsetUnit(value: string) {
    const newValueArray = [];
    for (let i = 0; i < this.singlePoint.length; i++) {
      newValueArray.push({
        centre: {
          longitude: {
            unit: value
          },
          latitude: {
            unit: value
          }
        }
      });
    }
    this.form.get('fields').patchValue(newValueArray);
  }

  removePointing(index: number) {
    this.singlePoint.removeAt(index);
  }

  private _coordType: string = 'ABSOLUTE';

  get coordType() {
    if (this.form.value.fields[0]) {
      return this.form.value.fields[0].centre.type;
    }
    return this._coordType;
  }

  set coordType(value: string) {
    const newValueArray = [];
    for (let i = 0; i < this.singlePoint.length; i++) {
      newValueArray.push({
        centre: {
          type: value
        }
      });
    }
    this.form.get('fields').patchValue(newValueArray);
    this._coordType = value;
  }

  addPointing(ra: Longitude, dec: Latitude) {
    this.singlePoint.push(this.formBuilder.group({
      name: '',
      centre: this.formBuilder.group({
        longitude: this.formBuilder.group({
          unit: this.offsetUnit ? this.offsetUnit : 'deg',
          content: [ra, Validators.required]
        }),
        latitude: this.formBuilder.group({
          unit: this.offsetUnit ? this.offsetUnit : 'deg',
          content: [dec, Validators.required]
        }),
        fieldName: `Field-${this.singlePoint.length + 1}`,
        type: this.coordType
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
