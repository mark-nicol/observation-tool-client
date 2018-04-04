import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  ISinglePoint,
  ITargetParameters
} from '../../../shared/interfaces/project/science-goal/target-parameters.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';
import {AladinService} from '../../services/aladin.service';
import {FormGroup} from '@angular/forms';

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

  constructor(private persistenceService: PersistenceService,
              private aladinService: AladinService) {
  }

  ngOnInit() {
    this.observeFormChanges();
    // this.persistenceService.getScienceGoal().subscribe(result => {
    //   this.target = result.TargetParameters[this.persistenceService.currentTarget];
    //   this.aladinService.goToRaDec(this.target.sourceCoordinates.longitude.content, this.target.sourceCoordinates.latitude.content);
    //   if (this.target.SinglePoint) {
    //     this.target.SinglePoint.forEach((point: ISinglePoint) => {
    //       this.aladinService.addPointing(new Fov(
    //         false,
    //         false,
    //         [
    //           this.target.sourceCoordinates.longitude.content + Object.assign(new Longitude, point.centre.longitude).getValueInUnits(LongitudeUnits.DEG),
    //           this.target.sourceCoordinates.latitude.content + Object.assign(new Latitude, point.centre.longitude).getValueInUnits(LongitudeUnits.DEG)
    //         ],
    //         null,
    //         0.05,
    //         25
    //       ))
    //     })
    //   }
    // });
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
    // TODO Work out what happens here
  }

  editMode() {
    // TODO Work out what happens here
  }

  observeFormChanges() {
    this.form.valueChanges.subscribe((value: ITargetParameters) => {
      this.aladinService.goToRaDec(this.form.value.sourceCoordinates.longitude.content, this.form.value.sourceCoordinates.latitude.content);
      this.aladinService.clearPointings();
      value.SinglePoint.forEach((point: ISinglePoint) => {
        console.log('Adding point at', (+value.sourceCoordinates.longitude.content + point.centre.longitude.content), (+value.sourceCoordinates.latitude.content + point.centre.latitude.content));
        this.aladinService.addPointing(
          +(value.sourceCoordinates.longitude.content) + point.centre.longitude.content,
          +(value.sourceCoordinates.latitude.content) + point.centre.latitude.content
        );
      });
    });
  }

}
