import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CURRENT_SOURCE} from '../../../shared/data/current-source';
import {IAladinConfig} from '../../../shared/interfaces/aladin/aladin-config.interface';
import {IAladinOverlay} from '../../../shared/interfaces/aladin/overlay.interface';
import {ITargetParameters} from '../../../shared/interfaces/project/science-goal/target-parameters.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';

declare let A: any;

@Component({
             selector:    'app-aladin',
             templateUrl: './aladin.component.html',
             styleUrls:   ['./aladin.component.scss']
           })
export class AladinComponent implements OnInit {

  @Output() coordinatesEmitter = new EventEmitter();

  target?: ITargetParameters;
  initialConfig: IAladinConfig = {
    // target:            '',
    cooFrame:          'ICRS',
    survey:            'P/DSS2/color',
    fov:               60,
    showReticle:       true,
    showZoomControl:   false,
    showLayersControl: true,
    showGotoControl:   false,
    showShareControl:  false,
    showFrame:         false,
    fullScreen:        false,
    reticleColor:      'rgb(178, 50, 178)',
    reticleSize:       22,
  };
  map;
  overlay: IAladinOverlay;
  catalogue;

  constructor(private persistenceService: PersistenceService) {
  }

  ngOnInit() {
    this.initAladin();
    this.persistenceService.getScienceGoal().subscribe(result => {
      this.target = result.TargetParameters[CURRENT_SOURCE];
      this.map.gotoRaDec(this.target.sourceCoordinates.longitude.content, this.target.sourceCoordinates.latitude.content);
    });
  }

  initAladin() {
    this.map       = A.aladin('#aladin-lite-div', this.initialConfig);
    this.catalogue = A.catalog({
                                 name:       'Pointing Catalogue',
                                 shape:      'cross',
                                 sourceSize: 20
                               });
    this.map.addCatalog(this.catalogue);
    this.overlay = A.graphicOverlay({color: '#ee2345', lineWidth: 3});
    this.map.addOverlay(this.overlay);
  }

  setFov(newFov: number) {
    this.map.setFov(newFov);
  }

  mouseMove(event: MouseEvent) {
    this.coordinatesEmitter.emit({
                                   pixel: [event.layerX, event.layerY],
                                   world: this.map.pix2world(event.layerX, event.layerY)
                                 });
  }

  mouseLeave() {
    this.coordinatesEmitter.emit({
                                   pixel: [document.getElementById('aladin-lite-div').offsetWidth / 2,
                                           document.getElementById('aladin-lite-div').offsetHeight / 2],
                                   world: this.map.getRaDec()
                                 });
  }

  resetView() {
    // this.map.gotoRaDec(this.target.sourceCoordinates.longitude.content, this.target.sourceCoordinates.latitude.content);
    this.map.gotoObject(this.target.sourceName);
    this.map.adjustFovForObject(this.target.sourceName);
    // this.setFov(60);
  }

  drawCircle() {
    this.catalogue.addSources(A.source(this.target.sourceCoordinates.longitude.content, this.target.sourceCoordinates.latitude.content));
    this.overlay.add(A.circle(this.target.sourceCoordinates.longitude.content, this.target.sourceCoordinates.latitude.content, 0.04, {name: 'Test Circle'}));
  }

  cutItems() {
    console.log('cut');
    this.catalogue.sources     = [];
    this.overlay.overlay_items = [];
  }

}
