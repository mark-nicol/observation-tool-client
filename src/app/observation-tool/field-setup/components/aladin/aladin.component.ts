import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  ISinglePoint,
  ITargetParameters
} from '../../../shared/interfaces/project/science-goal/target-parameters.interface';
import {ProjectService} from '../../../shared/services/project.service';
import {AladinService} from '../../services/aladin.service';
import {FormGroup} from '@angular/forms';
import {Longitude} from '../../../../units/classes/longitude';
import {LongitudeUnits} from '../../../../units/enums/longitude-units.enum';
import {LatitudeUnits} from '../../../../units/enums/latitude-units.enum';
import {Latitude} from '../../../../units/classes/latitude';

@Component({
  selector: 'app-aladin',
  templateUrl: './aladin.component.html',
  styleUrls: ['./aladin.component.css']
})
export class AladinComponent implements OnInit, AfterViewInit {

  @Output() coordinatesEmitter = new EventEmitter();
  @Output() fovAddedEmitter = new EventEmitter();
  @Output() rectAddedEmitter = new EventEmitter();

  @Input() form: FormGroup;
  target?: ITargetParameters;
  addingRect = false;
  addingFov = false;

  constructor(private persistenceService: ProjectService,
              private aladinService: AladinService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.aladinService.initAladin();
    this.observeFormChanges();
  }

  resetView() {
    this.aladinService.goToObject(
      this.target.sourceName,
      this.target.sourceCoordinates.longitude.content,
      this.target.sourceCoordinates.latitude.content
    );
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
    // TODO Work out what happens here
    this.aladinService.showPointings();
  }

  editMode() {
    // TODO Work out what happens here
    // Stop form subscriptions
    // hide overlays
    this.aladinService.hidePointings();
  }

  observeFormChanges() {
    this.form.valueChanges.subscribe((value: ITargetParameters) => {
      this.aladinService.goToRaDec(this.form.value.sourceCoordinates.longitude.content, this.form.value.sourceCoordinates.latitude.content);
      this.aladinService.clearPointings();
      if (value.type === 'F_MultiplePoints') {
        value.SinglePoint.forEach((point: ISinglePoint) => {
          if (point.centre.type === 'RELATIVE') {
            this.aladinService.addPointing(
              Object.assign(new Longitude, value.sourceCoordinates.longitude).getValueInUnits(LongitudeUnits.DEG) +
              Object.assign(new Longitude, point.centre.longitude).getValueInUnits(LongitudeUnits.DEG),
              Object.assign(new Latitude, value.sourceCoordinates.latitude).getValueInUnits(LatitudeUnits.DEG) +
              Object.assign(new Latitude, point.centre.latitude).getValueInUnits(LatitudeUnits.DEG)
            );
          } else if (point.centre.type === 'ABSOLUTE') {
            this.aladinService.addPointing(
              Object.assign(new Longitude, point.centre.longitude).getValueInUnits(LongitudeUnits.DEG),
              Object.assign(new Latitude, point.centre.latitude).getValueInUnits(LatitudeUnits.DEG)
            );
          }
        });
      } else if (value.type === 'F_SingleRectangle') {
        this.aladinService.addRectangle(value.sourceCoordinates, value.Rectangle);
      }
    });
  }

}
