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
import {AngleUnits} from '../../../../units/enums/angle-units.enum';


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

  get degreesPerPixel(): number {
    const aladinCorners = this.aladinService.getFovCorners();
    const aladinWidth = aladinCorners[0][0] - aladinCorners[1][0];
    return this.width / aladinWidth;
  }

  drawRectangle(rect: IRectangle) {
    const rectCentreLon = Object.assign(new Longitude, rect.centre.longitude).getValueInUnits(LongitudeUnits.DEG) * 1.8;
    const rectCentreLat = Object.assign(new Latitude, rect.centre.latitude).getValueInUnits(LatitudeUnits.DEG) * 1.05;
    let rectLong = Object.assign(new Angle, rect.long).getValueInUnits(LongitudeUnits.DEG) * 1.8;
    let rectShort = Object.assign(new Angle, rect.short).getValueInUnits(LongitudeUnits.DEG) * 1.05;
    const targetCentreLon = Object.assign(new Longitude, this.form.value.sourceCoordinates.longitude).getValueInUnits(LongitudeUnits.DEG);
    const targetCentreLat = Object.assign(new Latitude, this.form.value.sourceCoordinates.latitude).getValueInUnits(LongitudeUnits.DEG);
    const rectAngle = Object.assign(new Angle, rect.palong).getValueInUnits(AngleUnits.RAD);
    rectLong = rectLong * this.degreesPerPixel;
    rectShort = rectShort * this.degreesPerPixel;
    let actualCentreLon;
    let actualCentreLat;
    if (rect.centre.type === 'RELATIVE') {
      actualCentreLon = targetCentreLon + rectCentreLon;
      actualCentreLat = targetCentreLat + rectCentreLat;
    } else if (rect.centre.type === 'ABSOLUTE') {
      actualCentreLon = rectCentreLon;
      actualCentreLat = rectCentreLat;
    }

    const centrePx = this.aladinService.coordsWorldToPix([actualCentreLon, actualCentreLat]);

    const rectCorners = [
      {
        x: centrePx[0] - (rectLong / 2),
        y: centrePx[1] - (rectShort / 2),
        fill: 'orange'
      },
      {
        x: centrePx[0] + (rectLong / 2),
        y: centrePx[1] - (rectShort / 2),
        fill: 'green'
      },
      {
        x: centrePx[0] + (rectLong / 2),
        y: centrePx[1] + (rectShort / 2),
        fill: 'red'
      },
      {
        x: centrePx[0] - (rectLong / 2),
        y: centrePx[1] + (rectShort / 2),
        fill: 'blue'
      }
    ];

    this.drawArea.append('circle')
      .attr('cx', centrePx[0])
      .attr('cy', centrePx[1])
      .attr('r', 2)
      .style('fill', 'grey');

    this.drawArea.append('rect')
      .attr('x', rectCorners[0].x)
      .attr('y', rectCorners[0].y)
      .attr('width', rectLong)
      .attr('height', rectShort)
      .attr('stroke', 'black')
      .attr('tansform', `rotate(${rectAngle})`);

    const rectPoints = this.drawArea.append('g').selectAll('circle').data(rectCorners).enter();
    rectPoints.append('circle')
      .attr('cx', d => {
          return d.x
        }
      )
      .attr('cy', d => {
        return d.y
      })
      .attr('r', 2)
      .style('fill', d => {
        return d.fill
      });


    /*
    const rectCentreLon = Object.assign(new Longitude, rect.centre.longitude).getValueInUnits(LongitudeUnits.DEG);
    const rectCentreLat = Object.assign(new Latitude, rect.centre.latitude).getValueInUnits(LongitudeUnits.DEG);
    const rectLong = Object.assign(new Angle, rect.long).getValueInUnits(LongitudeUnits.DEG);
    const rectShort = Object.assign(new Angle, rect.short).getValueInUnits(LongitudeUnits.DEG);
    const targCentreLon = Object.assign(new Longitude, this.form.value.sourceCoordinates.longitude).getValueInUnits(LongitudeUnits.DEG);
    const targCentreLat = Object.assign(new Latitude, this.form.value.sourceCoordinates.latitude).getValueInUnits(LongitudeUnits.DEG);
    const rectAngle = Object.assign(new Angle, rect.palong).getValueInUnits(AngleUnits.RAD);
    let actualCentreLon;
    let actualCentreLat;
    if (rect.centre.type === 'RELATIVE') {
      actualCentreLon = targCentreLon + rectCentreLon;
      actualCentreLat = targCentreLat + rectCentreLat;
    } else if (rect.centre.type === 'ABSOLUTE') {
      actualCentreLon = rectCentreLon;
      actualCentreLat = rectCentreLat;
    }

    const topLeft = AladinService.rotatedPoint(actualCentreLon, actualCentreLat, -(rectLong / 2), -(rectShort / 2), -rectAngle);
    const topRight = AladinService.rotatedPoint(actualCentreLon, actualCentreLat, (rectLong / 2), -(rectShort / 2), -rectAngle);
    const bottomRight = AladinService.rotatedPoint(actualCentreLon, actualCentreLat, (rectLong / 2), (rectShort / 2), -rectAngle);
    const bottomLeft = AladinService.rotatedPoint(actualCentreLon, actualCentreLat, -(rectLong / 2), (rectShort / 2), -rectAngle);

    const p1Pix = this.aladinService.coordsWorldToPix([topLeft.x, topLeft.y]);
    const p2Pix = this.aladinService.coordsWorldToPix([topRight.x, topRight.y]);
    const p3Pix = this.aladinService.coordsWorldToPix([bottomRight.x, bottomRight.y]);
    const p4Pix = this.aladinService.coordsWorldToPix([bottomLeft.x, bottomLeft.y]);

    this.drawArea.append('polygon')
      .attr('points', `${p1Pix[0]},${p1Pix[1]} ${p2Pix[0]},${p2Pix[1]} ${p3Pix[0]},${p3Pix[1]} ${p4Pix[0]},${p4Pix[1]}`)
      .attr('fill', 'none')
      .style('stroke-width', '2px')
      .style('stroke', 'lime');
      */
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
