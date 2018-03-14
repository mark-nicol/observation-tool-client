import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Fov} from '../../../shared/classes/pointings/fov';
import {Pointing} from '../../../shared/classes/pointings/pointing';
import {Rectangle} from '../../../shared/classes/pointings/rectangle';
import {ITargetParameters} from '../../../shared/interfaces/project/science-goal/target-parameters.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';
import {AladinService} from '../../services/aladin.service';
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
  addingRect = false;
  addingFov  = false;

  constructor(private persistenceService: PersistenceService,
              private canvasService: CanvasService,
              private aladinService: AladinService) {
  }

  ngOnInit() {
    this.persistenceService.getScienceGoal().subscribe(result => {
      this.target = result.TargetParameters[this.persistenceService.currentTarget];
      this.aladinService.goToRaDec(this.target.sourceCoordinates.longitude.content, this.target.sourceCoordinates.latitude.content);
    });
  }

  ngAfterViewInit() {
    this.aladinService.initAladin();
  }

  resetView() {
    this.aladinService.goToObject(this.target.sourceName, this.target.sourceCoordinates.longitude.content, this.target.sourceCoordinates.latitude.content);
  }

  zoomIn() {
    this.aladinService.zoomIn()
  }

  zoomOut() {
    this.aladinService.zoomOut();
  }

  normalZoom() {
    this.aladinService.resetZoom();
  }

  goToCoords(lon: number, lat: number) {
    this.aladinService.goToRaDec(lon, lat);
  }

  mouseMove(event: MouseEvent) {
    this.coordinatesEmitter.emit({
      pixel: [event.layerX, event.layerY],
      world: this.aladinService.coordsPixToWorld([event.layerX, event.layerY])
    });
  }

  mouseLeave() {
    this.coordinatesEmitter.emit({
      pixel: [document.getElementById('aladin-lite-div').offsetWidth / 2,
              document.getElementById('aladin-lite-div').offsetHeight / 2],
      world: this.aladinService.RaDec
    });
  }

  viewMode() {
    this.canvasService.pointings.forEach((pointing: Pointing) => {
      this.canvasService.updateSkyCoords(pointing, this.calculateWorldCoords(pointing));
    });
    this.canvasService.pointings.forEach((pointing: Pointing) => {
      this.aladinService.addPointing(pointing);
    });
  }

  calculateWorldCoords(pointing: Pointing): Pointing {
    if (pointing instanceof Rectangle) {
      const topLeft         = this.aladinService.coordsPixToWorld(pointing.coordsPixel.topLeft);
      const topRight        = this.aladinService.coordsPixToWorld(pointing.coordsPixel.topRight);
      const bottomLeft      = this.aladinService.coordsPixToWorld(pointing.coordsPixel.bottomLeft);
      const bottomRight     = this.aladinService.coordsPixToWorld(pointing.coordsPixel.bottomRight);
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
      fov.coordsWorld = this.aladinService.coordsPixToWorld(pointing.coordsPixel);
      return fov;
    }
  }

  editMode() {
    const newPointings = [];
    this.aladinService.footprints.forEach(footprint => {
      console.log(typeof footprint);
      const newPolygon       = new Rectangle();
      newPolygon.coordsPixel = {
        topLeft: this.aladinService.coordsWorldToPix(footprint.polygons[0]),
        topRight: this.aladinService.coordsWorldToPix(footprint.polygons[1]),
        bottomLeft: this.aladinService.coordsWorldToPix(footprint.polygons[3]),
        bottomRight: this.aladinService.coordsWorldToPix(footprint.polygons[2])
      };
      newPolygon.coordsWorld = {
        topLeft: footprint.polygons[0],
        topRight: footprint.polygons[1],
        bottomLeft: footprint.polygons[3],
        bottomRight: footprint.polygons[2]
      };
      newPointings.push(newPolygon);
    });
    this.aladinService.circles.forEach(circle => {
      const newFov       = new Fov();
      newFov.coordsPixel = this.aladinService.coordsWorldToPix(circle.centerRaDec);
      newFov.coordsWorld = circle.centerRaDec;
      newFov.radiusWorld = circle.radiusDegrees;
      newPointings.push(newFov);
    });
    this.canvasService.pointings = newPointings;
    this.aladinService.clearPointings();
  }

}
