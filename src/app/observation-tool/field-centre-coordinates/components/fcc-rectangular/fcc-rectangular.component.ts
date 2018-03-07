import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CoordSystemInterface} from '../../../shared/interfaces/coord-system.interface';
import {SystemService} from '../../../shared/services/system.service';

/**
 * Field Centre Coordinates component
 *
 * Shows when single rectangular is selected in source component
 */

@Component({
             selector: 'fcc-rectangular',
             templateUrl: './fcc-rectangular.component.html',
             styleUrls: ['./fcc-rectangular.component.scss']
           })
export class FccRectangularComponent implements OnInit {



  @Input() form: FormGroup;



  /** Units for the offset selection box */
  offsetUnits = [
    'mas',
    'arcsec',
    'arcmin',
    'deg',
    'rad'
  ];

  constructor() {
  }

  ngOnInit(): void {

  }

}
