import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Latitude} from '../../../../units/classes/latitude';
import {Longitude} from '../../../../units/classes/longitude';
import {LatitudeUnits} from '../../../../units/enums/latitude-units.enum';
import {LongitudeUnits} from '../../../../units/enums/longitude-units.enum';
import {Fov} from '../../../shared/classes/pointings/fov';
import {Pointing} from '../../../shared/classes/pointings/pointing';
import {Rectangle} from '../../../shared/classes/pointings/rectangle';
import {IAladinConfig} from '../../../shared/interfaces/aladin/aladin-config.interface';
import {IAladinOverlay} from '../../../shared/interfaces/aladin/overlay.interface';
import {ITargetParameters} from '../../../shared/interfaces/project/science-goal/target-parameters.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';
import {CanvasService} from '../../services/canvas.service';

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
    this.overlay = A.graphicOverlay({color: '#FFAA00', lineWidth: 3});
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
    this.canvasService.pointings.forEach((pointing: Pointing) => {
      this.canvasService.updateSkyCoords(pointing, this.calculateWorldCoords(pointing));
    });
    this.canvasService.pointings.forEach((pointing: Pointing) => {
      if (pointing.coordsWorld) {
        if (pointing instanceof Rectangle) {
          this.overlay.addFootprints(A.polygon([
            pointing.coordsWorld.topLeft,
            pointing.coordsWorld.topRight,
            pointing.coordsWorld.bottomRight,
            pointing.coordsWorld.bottomLeft
          ]));
        } else if (pointing instanceof Fov) {
          this.overlay.add(A.circle(pointing.coordsWorld[0], pointing.coordsWorld[1], 0.05, {color: '#FFAA00'}));
        }
      }
    });
  }

  calculateWorldCoords(pointing: Pointing): Pointing {
    if (pointing instanceof Rectangle) {
      const topLeft         = this.aladin.pix2world(pointing.coordsPixel.topLeft[0], pointing.coordsPixel.topLeft[1]);
      const topRight        = this.aladin.pix2world(pointing.coordsPixel.topRight[0], pointing.coordsPixel.topRight[1]);
      const bottomLeft      = this.aladin.pix2world(pointing.coordsPixel.bottomLeft[0], pointing.coordsPixel.bottomLeft[1]);
      const bottomRight     = this.aladin.pix2world(pointing.coordsPixel.bottomRight[0], pointing.coordsPixel.bottomRight[1]);
      const rectangle       = new Rectangle();
      rectangle.coordsWorld = {
        topLeft: topLeft,
        topRight: topRight,
        bottomLeft: bottomLeft,
        bottomRight: bottomRight
      };
      return rectangle;
    } else if (pointing instanceof Fov) {
      const fov       = new Fov();
      fov.coordsWorld = this.aladin.pix2world(pointing.coordsPixel[0], pointing.coordsPixel[1]);
      return fov;
    }
  }

  editMode() {
    const newPolygons = [];
    this.overlay.overlays.forEach(footprint => {
      const newPolygon       = new Rectangle();
      newPolygon.coordsPixel = {
        topLeft: this.aladin.world2pix(footprint.pointings[0][0], footprint.pointings[0][1]),
        topRight: this.aladin.world2pix(footprint.pointings[1][0], footprint.pointings[1][1]),
        bottomLeft: this.aladin.world2pix(footprint.pointings[3][0], footprint.pointings[3][1]),
        bottomRight: this.aladin.world2pix(footprint.pointings[2][0], footprint.pointings[2][1])
      };
      newPolygon.coordsWorld = {
        topLeft: footprint.pointings[0],
        topRight: footprint.pointings[1],
        bottomLeft: footprint.pointings[3],
        bottomRight: footprint.pointings[2]
      };
      newPolygons.push(newPolygon);
    });
    this.canvasService.pointings = newPolygons;
    this.overlay.overlays        = [];
    this.catalogue.reportChange();
  }

}
