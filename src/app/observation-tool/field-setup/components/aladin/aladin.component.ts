import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Latitude} from '../../../../units/classes/latitude';
import {Longitude} from '../../../../units/classes/longitude';
import {LatitudeUnits} from '../../../../units/enums/latitude-units.enum';
import {LongitudeUnits} from '../../../../units/enums/longitude-units.enum';
import {IAladinConfig} from '../../../shared/interfaces/aladin/aladin-config.interface';
import {IAladinOverlay} from '../../../shared/interfaces/aladin/overlay.interface';
import {ITargetParameters} from '../../../shared/interfaces/project/science-goal/target-parameters.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';

declare let A: any;

@Component({
  selector: 'app-aladin',
  templateUrl: './aladin.component.html',
  styleUrls: ['./aladin.component.css']
})
export class AladinComponent implements OnInit, AfterViewInit {

  @Output() coordinatesEmitter = new EventEmitter();
  @Output() fovAddedEmitter    = new EventEmitter();
  @Output() rectAddedEmitter   = new EventEmitter();

  target?: ITargetParameters;
  initialConfig: IAladinConfig = {
    // target:            'M1',
    cooFrame: 'ICRS',
    survey: 'P/DSS2/color',
    fov: 2,
    showReticle: true,
    showZoomControl: false,
    showLayersControl: true,
    showGotoControl: false,
    showShareControl: false,
    showFrame: false,
    fullScreen: false,
    reticleColor: 'rgb(178, 50, 178)',
    reticleSize: 22,
  };
  private aladin;
  private overlay: IAladinOverlay;
  private catalogue;
  zoomStep                     = 1.5;
  defaultFov                   = 4;
  addingFov                    = false;
  addingRect                   = false;
  hoveredObject: any;

  constructor(private persistenceService: PersistenceService) {
  }

  ngOnInit() {
    this.persistenceService.getScienceGoal().subscribe(result => {
      this.target = result.TargetParameters[this.persistenceService.currentTarget];
      this.aladin.gotoRaDec(this.target.sourceCoordinates.longitude.content, this.target.sourceCoordinates.latitude.content);
      // this.addPointings();
    });
  }

  ngAfterViewInit() {
    this.initAladin();
    this.aladin.on('objectHovered', object => {
      this.hoveredObject = object;
    });
    this.aladin.on('objectClicked', object => {
      if (object) {
        object.isSelected = !object.isSelected;
      }
    });
  }

  initAladin() {
    this.aladin    = A.aladin('#aladin-lite-div', this.initialConfig);
    this.catalogue = A.catalog({
      name: 'Pointing Catalogue',
      shape: 'cross',
      sourceSize: 20
    });
    this.aladin.addCatalog(this.catalogue);
    this.overlay = A.graphicOverlay({color: '#ee2345', lineWidth: 3});
    this.aladin.addOverlay(this.overlay);
  }

  resetView() {
    this.aladin.gotoRaDec(this.target.sourceCoordinates.longitude.content, this.target.sourceCoordinates.latitude.content);
    this.aladin.adjustFovForObject(this.target.sourceName);
  }

  addPointings() {
    if (this.target.SinglePoint) {
      this.target.SinglePoint.forEach(point => {
        const lat = new Latitude(<LatitudeUnits> point.centre.latitude.unit, point.centre.latitude.content);
        const lon = new Longitude(<LongitudeUnits> point.centre.longitude.unit, point.centre.longitude.content);
        this.addPointing(
          this.target.sourceCoordinates.longitude.content + lon.getValueInUnits(LatitudeUnits.DEG),
          this.target.sourceCoordinates.latitude.content + lat.getValueInUnits(LatitudeUnits.DEG));
      });
    }
  }

  addPointing(lon: number, lat: number) {
    this.catalogue.addSources(A.source(lon, lat));
    this.overlay.add(A.circle(lon, lat, 0.0018));
  }

  addRectangle(lon: number, lat: number) {
    console.log(this.overlay);
    this.overlay.addFootprints(A.polygon([
      [lon + 0.25, lat + 0.25],        // bl
      [lon + 0.25, lat - 0.25],        // tl
      [lon - 0.25, lat - 0.25],        // tr
      [lon - 0.25, lat + 0.25]
    ]));
    this.catalogue.addSources(A.source(lon, lat));
    console.log(this.overlay);
  }

  cutItems() {
    // For each object where isSelected === true
    this.catalogue.sources.forEach((item, i) => {
      if (item.isSelected) {
        // Remove target
        this.catalogue.sources.splice(i, 1);
        // Remove circle
        this.overlay.overlay_items.splice(i, 1);
        this.overlay.overlays.splice(i, 1);
      }
    });
    this.catalogue.reportChange();
    console.log(this.catalogue.sources, this.overlay.overlay_items);
  }

  zoomIn() {
    this.aladin.setFov(this.aladin.getFov()[0] / this.zoomStep);
  }

  zoomOut() {
    this.aladin.setFov(this.aladin.getFov()[0] * this.zoomStep);
  }

  normalZoom() {
    this.aladin.setFov(this.defaultFov);
  }

  goToCoords(lon: number, lat: number) {
    this.aladin.gotoRaDec(lon, lat);
  }

  mouseUp(event: MouseEvent) {
    // const coords = this.aladin.pix2world(event.layerX, event.layerY);
    // if (this.addingFov) {
    //   this.addPointing(coords[0], coords[1]);
    //   this.fovAddedEmitter.emit();
    // }
    // if (this.addingRect) {
    //   this.addRectangle(coords[0], coords[1]);
    //   this.rectAddedEmitter.emit();
    // }
  }

  mouseMove(event: MouseEvent) {
    this.coordinatesEmitter.emit({
      pixel: [event.layerX, event.layerY],
      world: this.aladin.pix2world(event.layerX, event.layerY)
    });
  }

  mouseLeave() {
    this.coordinatesEmitter.emit({
      pixel: [document.getElementById('aladin-lite-div').offsetWidth / 2,
              document.getElementById('aladin-lite-div').offsetHeight / 2],
      world: this.aladin.getRaDec()
    });
  }

}
