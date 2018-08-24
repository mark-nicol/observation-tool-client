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
import {Angle} from '../../../../units/classes/angle';


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
  private drawArea: any;
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
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);
    this.drawArea = this.svg.append('g').attr('class', 'draw-area');
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
    this.drawArea.append('circle')
      .attr('cx', worldCoords[0])
      .attr('cy', worldCoords[1])
      .attr('r', this.aladinService.getCanvasRadius())
      .attr('fill', 'none')
      .style('stroke-width', '2px')
      .style('stroke', 'lime');
  }

  drawRectangle(rect: IRectangle) {
    const rectCentreLon = Object.assign(new Longitude, rect.centre.longitude).getValueInUnits(LongitudeUnits.DEG);
    const rectCentreLat = Object.assign(new Latitude, rect.centre.latitude).getValueInUnits(LongitudeUnits.DEG);
    const rectLong = Object.assign(new Angle, rect.long).getValueInUnits(LongitudeUnits.DEG);
    const rectShort = Object.assign(new Angle, rect.short).getValueInUnits(LongitudeUnits.DEG);
    const targCentreLon = Object.assign(new Longitude, this.form.value.sourceCoordinates.longitude).getValueInUnits(LongitudeUnits.DEG);
    const targCentreLat = Object.assign(new Latitude, this.form.value.sourceCoordinates.latitude).getValueInUnits(LongitudeUnits.DEG);
    let actualLon;
    let actualLat;
    if (rect.centre.type === 'RELATIVE') {
      actualLon = targCentreLon + rectCentreLon;
      actualLat = targCentreLat + rectCentreLat;
    } else if (rect.centre.type === 'ABSOLUTE') {
      actualLon = rectCentreLon;
      actualLat = rectCentreLat;
    }

    const p1 = {
      x: actualLon - rectLong * Math.sin(rect.palong.content),
      y: actualLat - rectShort / 2 * Math.cos(rect.palong.content)
    };  // Bottom Left
    const p2 = {
      x: actualLon + rectLong * Math.cos(rect.palong.content),
      y: actualLat - rectShort / 2 * Math.sin(rect.palong.content)
    };  // Top Left
    const p3 = {
      x: actualLon + rectLong * Math.sin(rect.palong.content),
      y: actualLat + rectShort / 2 * Math.cos(rect.palong.content)
    };  // Top Right
    const p4 = {
      x: actualLon - rectLong * Math.cos(rect.palong.content),
      y: actualLat + rectShort / 2 * Math.sin(rect.palong.content)
    };  // Bottom Right

    const p1Pix = this.aladinService.coordsWorldToPix([p1.x, p1.y]);
    const p2Pix = this.aladinService.coordsWorldToPix([p2.x, p2.y]);
    const p3Pix = this.aladinService.coordsWorldToPix([p3.x, p3.y]);
    const p4Pix = this.aladinService.coordsWorldToPix([p4.x, p4.y]);

    const xSidePix = p3Pix[0] - p2Pix[0];
    const ySidePix = p1Pix[1] - p2Pix[1];

    this.drawArea.append('polygon')
      .attr('points', `${p1Pix[0]},${p1Pix[1]} ${p2Pix[0]},${p2Pix[1]} ${p3Pix[0]},${p3Pix[1]} ${p4Pix[0]},${p4Pix[1]}`)
      .attr('fill', 'none')
      .style('stroke-width', '2px')
      .style('stroke', 'lime');
    this.drawArea.append('rect')
      .attr('x', p2Pix[0])
      .attr('y', p2Pix[1])
      .attr('width', xSidePix)
      .attr('height', ySidePix)
      .attr('transform', `rotate(${-rect.palong.content})`);
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
