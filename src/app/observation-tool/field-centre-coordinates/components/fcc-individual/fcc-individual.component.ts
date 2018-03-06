import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {SinglePoint} from '../../../shared/classes/science-goal/single-point';
import {CoordSystemInterface} from '../../../shared/interfaces/coord-system.interface';
import {ISinglePoint} from '../../../shared/interfaces/project/science-goal/target-parameters.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';
import {SystemService} from '../../../shared/services/system.service';

/**
 * Individual Field Centre Coordinates component
 */

@Component({
  selector: 'fcc-individual',
  templateUrl: './fcc-individual.component.html',
  styleUrls: ['./fcc-individual.component.scss']
})
export class FccIndividualComponent implements OnInit {

  @Input() form: FormGroup;

  /** Units for the offset selection box */
  offsetUnits = [
    'mas',
    'arcsec',
    'arcmin',
    'deg',
    'rad'
  ];

  /**
   * Constructor
   *
   * Sets local _fieldSetupService from injected and retrieves page data from service
   * @param systemService
   */
  constructor(private systemService: SystemService) {

  }

  ngOnInit() {
    console.log(this.form);
  }

  get SinglePoint(): FormArray {
    return this.form.get('SinglePoint') as FormArray;
  }

}
