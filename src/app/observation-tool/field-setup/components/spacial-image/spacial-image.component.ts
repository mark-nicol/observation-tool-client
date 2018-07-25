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

import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AladinComponent} from '../aladin/aladin.component';
import {PointingCanvasComponent} from '../pointing-canvas/pointing-canvas.component';
import {FormGroup} from '@angular/forms';

/**
 * Spacial image component
 *
 * Currently inactive
 */

@Component({
  selector: 'spacial-image',
  templateUrl: './spacial-image.component.html',
  styleUrls: ['./spacial-image.component.css']
})
export class SpacialImageComponent implements OnInit {

  @Input() set resolveCoordinates(value: number[]) {
    if (value)
      this.goToCoords(value[0], value[1]);
  }

  @Input() form: FormGroup;

  @ViewChild(AladinComponent) aladin: AladinComponent;
  @ViewChild(PointingCanvasComponent) pointingCanvas: PointingCanvasComponent;

  pixelCoords = [0, 0];
  worldCoords = [0, 0];
  addingFov   = false;
  addingRect  = false;
  editMode    = false;

  constructor() {

  }

  ngOnInit() {

  }

  zoomIn() {
    this.aladin.zoomIn();
  }

  zoomOut() {
    this.aladin.zoomOut();
  }

  normalZoom() {
    this.aladin.normalZoom();
  }

  updateCoords(coords: any) {
    this.pixelCoords = coords.pixel;
    this.worldCoords = coords.world;
  }

  cutLayers() {
    this.pointingCanvas.cutPolygons();
  }

  resetView() {
    this.aladin.resetView();
  }

  goToCoords(lon: number, lat: number) {
    this.aladin.goToCoords(lon, lat);
  }

  toggleAddingFov() {
    this.addingFov                = !this.addingFov;
    this.aladin.addingFov         = this.addingFov;
    this.pointingCanvas.addingFov = this.addingFov;
  }

  toggleAddingRect() {
    this.addingRect               = !this.addingRect;
    this.aladin.addingRect        = this.addingRect;
    this.pointingCanvas.addingRec = this.addingRect;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.aladin.editMode();
      // this.pointingCanvas.editMode();
    } else {
      this.aladin.viewMode();
    }
  }

}
