import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Latitude} from '../../../../units/classes/latitude';
import {Longitude} from '../../../../units/classes/longitude';
import {LatitudeUnits} from '../../../../units/enums/latitude-units.enum';
import {LongitudeUnits} from '../../../../units/enums/longitude-units.enum';
import {IAladinConfig} from '../../../shared/interfaces/aladin/aladin-config.interface';
import {IAladinOverlay} from '../../../shared/interfaces/aladin/overlay.interface';
import {ITargetParameters} from '../../../shared/interfaces/project/science-goal/target-parameters.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';
import {CanvasService, ISkyPolygon} from '../../services/canvas.service';

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

  constructor(private persistenceService: PersistenceService,
              private canvasService: CanvasService) {
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

  addRectangle(x: number, y: number, width: number, height: number) {
    const topLeft     = this.aladin.pix2world(x, y);
    const topRight    = this.aladin.pix2world(x + width, y);
    const bottomLeft  = this.aladin.pix2world(x, y + height);
    const bottomRight = this.aladin.pix2world(x + width, y + height);
    this.overlay.addFootprints(A.polygon([
      topLeft,
      topRight,
      bottomRight,
      bottomLeft
    ]));
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

  redraw() {
    this.canvasService.polygons.forEach(polygon => {
      if (!polygon.topLeft.worldCoords) {
        this.canvasService.addSkyCoords(polygon, this.calculateWorldCoords(polygon));
      }
    });
    this.canvasService.polygons.forEach(polygon => {
      if (polygon.topLeft.worldCoords) {
        this.overlay.addFootprints(A.polygon([
          polygon.topLeft.worldCoords,
          polygon.topRight.worldCoords,
          polygon.bottomRight.worldCoords,
          polygon.bottomLeft.worldCoords
        ]));
      }
    });
  }

  calculateWorldCoords(polygon: ISkyPolygon): ISkyPolygon {
    const topLeft     = this.aladin.pix2world(polygon.topLeft.pxCoords[0], polygon.topLeft.pxCoords[1]);
    const topRight    = this.aladin.pix2world(polygon.topRight.pxCoords[0], polygon.topRight.pxCoords[1]);
    const bottomLeft  = this.aladin.pix2world(polygon.bottomLeft.pxCoords[0], polygon.bottomLeft.pxCoords[1]);
    const bottomRight = this.aladin.pix2world(polygon.bottomRight.pxCoords[0], polygon.bottomRight.pxCoords[1]);
    return {
      topLeft: {worldCoords: topLeft},
      topRight: {worldCoords: topRight},
      bottomLeft: {worldCoords: bottomLeft},
      bottomRight: {worldCoords: bottomRight}
    }
  }

  editMode() {
    const newPolygons = [];
    this.overlay.overlays.forEach(footprint => {
      const newPolygon: ISkyPolygon = {
        topLeft: {
          pxCoords: this.aladin.world2pix(footprint.polygons[0][0], footprint.polygons[0][1]),
          worldCoords: footprint.polygons[0]
        },
        topRight: {
          pxCoords: this.aladin.world2pix(footprint.polygons[1][0], footprint.polygons[1][1]),
          worldCoords: footprint.polygons[1]
        },
        bottomRight: {
          pxCoords: this.aladin.world2pix(footprint.polygons[2][0], footprint.polygons[2][1]),
          worldCoords: footprint.polygons[2]
        },
        bottomLeft: {
          pxCoords: this.aladin.world2pix(footprint.polygons[3][0], footprint.polygons[3][1]),
          worldCoords: footprint.polygons[3]
        }
      };
      newPolygons.push(newPolygon);
    });
    this.canvasService.polygons = newPolygons;
    this.overlay.overlays       = [];
    this.catalogue.reportChange();
  }

}
