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

import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProjectService} from '../../../shared/services/project.service';
import {AladinService} from '../../services/aladin.service';
import {FormGroup} from '@angular/forms';
import {Longitude} from '../../../../units/classes/longitude';
import {LongitudeUnits} from '../../../../units/enums/longitude-units.enum';
import {LatitudeUnits} from '../../../../units/enums/latitude-units.enum';
import {Latitude} from '../../../../units/classes/latitude';
import {ITargetParameters} from '../../../shared/interfaces/apdm/target-parameters.interface';
import {ISinglePoint} from '../../../shared/interfaces/apdm/single-point.interface';
import {IRectangle} from '../../../shared/interfaces/apdm/rectangle.interface';
import {IField} from '../../../shared/interfaces/apdm/field.interface';

@Component({
  selector: 'app-aladin',
  templateUrl: './aladin.component.html',
  styleUrls: ['./aladin.component.css']
})
export class AladinComponent implements OnInit, AfterViewInit {

  @Output() coordinatesEmitter = new EventEmitter();
  @Output() fovAddedEmitter = new EventEmitter();
  @Output() rectAddedEmitter = new EventEmitter();

  @Input() form: FormGroup;
  target?: ITargetParameters;
  addingRect = false;
  addingFov = false;

  constructor(private persistenceService: ProjectService,
              private aladinService: AladinService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.aladinService.initAladin();
    this.aladinService.goToRaDec(this.form.value.sourceCoordinates.longitude.content, this.form.value.sourceCoordinates.latitude.content);
    this.drawFields();
    this.observeFormChanges();
  }

  resetView() {
    this.aladinService.goToObject(
      this.target.sourceName,
      this.target.sourceCoordinates.longitude.content,
      this.target.sourceCoordinates.latitude.content
    );
  }

  zoomIn() {
    this.aladinService.zoomIn()
  }

  zoomOut() {
    this.aladinService.zoomOut();
  }

  normalZoom() {
    this.aladinService.resetZoom();
  }

  goToCoords(lon: number, lat: number) {
    this.aladinService.goToRaDec(lon, lat);
  }

  mouseMove(event: MouseEvent) {
    this.coordinatesEmitter.emit({
      pixel: [event.layerX, event.layerY],
      world: this.aladinService.coordsPixToWorld([event.layerX, event.layerY])
    });
  }

  mouseLeave() {
    this.coordinatesEmitter.emit({
      pixel: [document.getElementById('aladin-lite-div').offsetWidth / 2,
        document.getElementById('aladin-lite-div').offsetHeight / 2],
      world: this.aladinService.RaDec
    });
  }

  viewMode() {
    // TODO Work out what happens here
    this.aladinService.showPointings();
  }

  editMode() {
    // TODO Work out what happens here
    // Stop form subscriptions
    // hide overlays
    this.aladinService.hidePointings();
  }

  observeFormChanges() {
    this.form.valueChanges.subscribe((value: ITargetParameters) => {
      console.log(value);
      this.aladinService.goToRaDec(this.form.value.sourceCoordinates.longitude.content, this.form.value.sourceCoordinates.latitude.content);
      this.drawFields();
    });
  }

  drawFields() {
    this.aladinService.clearPointings();
    if (this.form.value.type === 'F_MultiplePoints') {
      this.form.value.fields.forEach((point: ISinglePoint) => {
        if (point.centre.type === 'RELATIVE') {
          this.aladinService.addPointing(
            Object.assign(new Longitude, this.form.value.sourceCoordinates.longitude).getValueInUnits(LongitudeUnits.DEG) +
            Object.assign(new Longitude, point.centre.longitude).getValueInUnits(LongitudeUnits.DEG),
            Object.assign(new Latitude, this.form.value.sourceCoordinates.latitude).getValueInUnits(LatitudeUnits.DEG) +
            Object.assign(new Latitude, point.centre.latitude).getValueInUnits(LatitudeUnits.DEG)
          );
        } else if (point.centre.type === 'ABSOLUTE') {
          console.log(point);
          this.aladinService.addPointing(
            Object.assign(new Longitude, point.centre.longitude).getValueInUnits(LongitudeUnits.DEG),
            Object.assign(new Latitude, point.centre.latitude).getValueInUnits(LatitudeUnits.DEG)
          );
        }
      });
    } else if (this.form.value.type === 'F_SingleRectangle') {
      this.aladinService.addRectangle(this.form.value.sourceCoordinates, <IRectangle>this.form.value.fields[0]);
    }
  }

}
