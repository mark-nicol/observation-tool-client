import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {FccIndividualComponent} from './components/fcc-individual/fcc-individual.component';
import {FccRectangularComponent} from './components/fcc-rectangular/fcc-rectangular.component';

/**
 * Handles the Field Centre Coordinates component in the Field Setup
 */

@Component({
  selector: 'field-center-coordinates',
  templateUrl: './field-center-coordinates.component.html',
  styleUrls: ['./field-center-coordinates.component.css'],
})
export class FieldCenterCoordinatesComponent implements OnInit {

  @Input() form: FormGroup;
  @ViewChild(FccIndividualComponent) individual: FccIndividualComponent;
  @ViewChild(FccRectangularComponent) rectangular: FccRectangularComponent;

  constructor() {
  }

  ngOnInit() {
    console.log(this.form);
  }

}
