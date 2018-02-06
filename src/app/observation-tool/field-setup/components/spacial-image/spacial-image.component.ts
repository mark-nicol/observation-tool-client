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

  defaultFov = 60;
  currentFov = this.defaultFov;
  zoomStep   = 1.5;

  constructor(private persistenceService: PersistenceService) {

  }

  ngOnInit() {

  }

  checkFov() {
    console.log(this.aladin.map.getFov());
  }

  zoomIn() {
    // this.currentFov -= this.zoomStep;
    // console.log('zoom in', this.currentFov);
    this.aladin.setFov(this.aladin.map.getFov()[0] / this.zoomStep);
  }

  zoomOut() {
    // this.currentFov += this.zoomStep;
    // console.log('zoom out', this.currentFov);
    this.aladin.setFov(this.aladin.map.getFov()[0] * this.zoomStep);
  }

  normalView() {
    this.currentFov = this.defaultFov;
    this.aladin.setFov(this.defaultFov);
  }

}
