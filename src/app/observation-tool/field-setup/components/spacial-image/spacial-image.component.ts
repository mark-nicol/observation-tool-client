import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AladinComponent} from '../aladin/aladin.component';

/**
 * Spacial image component
 *
 * Currently inactive
 */

@Component({
             selector:    'spacial-image',
             templateUrl: './spacial-image.component.html',
             styleUrls:   ['./spacial-image.component.css']
           })
export class SpacialImageComponent implements OnInit {

  @Input() set resolveCoordinates(value: number[]) {
    if (value)
      this.goToCoords(value[0], value[1]);
  }

  @ViewChild(AladinComponent) aladin: AladinComponent;

  pixelCoords = [0, 0];
  worldCoords = [0, 0];
  addingFov = false;

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
    this.aladin.cutItems();
  }

  resetView() {
    this.aladin.resetView();
  }

  goToCoords(lon: number, lat: number) {
    this.aladin.goToCoords(lon, lat);
  }

  toggleAddingFov() {
    this.addingFov = !this.addingFov;
    this.aladin.addingFov = this.addingFov;
  }

}
