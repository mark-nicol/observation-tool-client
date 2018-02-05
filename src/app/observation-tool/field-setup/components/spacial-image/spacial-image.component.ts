import {Component, OnInit, ViewChild} from '@angular/core';
import {PersistenceService} from '../../../shared/services/persistence.service';
import {AladinComponent} from '../aladin/aladin.component';

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

  data: any;
  @ViewChild(AladinComponent) aladin: AladinComponent;

  constructor(private persistenceService: PersistenceService) {

  }

  ngOnInit() {

  }

  zoomIn() {

  }

  zoomOut() {

  }

  normalView() {
    this.aladin.setFov(60);
  }

}
