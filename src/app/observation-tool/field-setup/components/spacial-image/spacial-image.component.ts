import {Component, OnInit, ViewChild} from '@angular/core';
import {PersistenceService} from '../../../shared/services/persistence.service';
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

  @ViewChild(AladinComponent) aladin: AladinComponent;

  pixelCoords = [0, 0];
  worldCoords = [0, 0];

  constructor(private persistenceService: PersistenceService) {

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

}
