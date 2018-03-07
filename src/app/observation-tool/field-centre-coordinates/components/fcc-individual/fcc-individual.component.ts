import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
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
    return this.form.get('pointings') as FormArray;
  }

}
