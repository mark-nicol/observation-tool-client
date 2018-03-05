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

  /** The selected radio button content from FieldCentreCoordinatesComponent */
  @Input() radioValue;
  @Input() sourceCoordinatesSystemString;
  sourceCoordinatesSystem: CoordSystemInterface;

  @Input() form: FormGroup;

  @Input()
  tableRows = [];

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
   * @param persistenceService The injected service
   * @param formBuilder
   * @param systemService
   */
  constructor(private systemService: SystemService) {

  }

  ngOnInit() {
    // this.initComponent(this.tableRows);
    console.log(this.form);
  }

  // initComponent(tableRows: any) {
  //   this.sourceCoordinatesSystem = this.systemService.getSystem(this.sourceCoordinatesSystemString);
  //   this.setRows(tableRows);
  // }
  //
  // setRows(rows: ISinglePoint[]) {
  //   const rowFormGroups = rows.map(tableRow => this.formBuilder.group(tableRow));
  //   const rowFormArray  = this.formBuilder.array(rowFormGroups);
  //   this.individualForm.setControl('rows', rowFormArray);
  // }
  //
  // get rows(): FormArray {
  //   return this.individualForm.get('rows') as FormArray;
  // }

  // /**
  //  * Adds a new row to the page data
  //  */
  // addRow() {
  //   this.rows.push(this.formBuilder.group(new SinglePoint()));
  // }

  /**
   * Removes the last row from the page data
   */
  removeRow() {
  }

  get SinglePoint(): FormArray {
    return this.form.get('SinglePoint') as FormArray;
  }

}
