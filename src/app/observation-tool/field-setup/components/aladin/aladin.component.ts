import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CURRENT_SOURCE} from '../../../shared/data/current-source';
import {IAladinConfig} from '../../../shared/interfaces/aladin-config.interface';
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
    target:            'm31',
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

  constructor(private persistenceService: PersistenceService) {
  }

  ngOnInit() {
    this.initAladin();
    this.persistenceService.getScienceGoal().subscribe(result => {
      this.target = result.TargetParameters[CURRENT_SOURCE];
      // this.map.goTo(this.target.sourceName);
      console.log(this.target);
    });
  }

  initAladin() {
    this.map = A.aladin('#aladin-lite-div', this.initialConfig);
    // this.map.gotoRaDec(this.target.sourceCoordinates.latitude.content, this.target.sourceCoordinates.longitude.content);
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

  mouseLeave(event: MouseEvent) {
    this.coordinatesEmitter.emit({
                                   pixel: [document.getElementById('aladin-lite-div').offsetWidth / 2,
                                           document.getElementById('aladin-lite-div').offsetHeight / 2],
                                   world: this.map.getRaDec()
                                 });
  }

}
