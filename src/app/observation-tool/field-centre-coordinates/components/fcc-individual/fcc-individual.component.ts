import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {PersistenceService} from '../../../shared/services/persistence.service';
import {TableRow} from '../../field-center-coordinates.component';

/**
 * Individual Field Centre Coordinates component
 */

@Component({
             selector: 'fcc-individual',
             templateUrl: './fcc-individual.component.html',
             styleUrls: ['./fcc-individual.component.scss']
           })
export class FccIndividualComponent implements OnInit {

  /** The selected radio button value from FieldCentreCoordinatesComponent */
  @Input() radioValue;

  @Input('group')
  individualForm: FormGroup;

  @Input()
  tableRows: any;

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
   */
  constructor(private persistenceService: PersistenceService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.setRows(this.tableRows);
  }

  setRows(rows: TableRow[]) {
    const rowFormGroups = rows.map(tableRow => this.formBuilder.group(tableRow));
    const rowFormArray  = this.formBuilder.array(rowFormGroups);
    this.individualForm.setControl('rows', rowFormArray);
  }

  get rows(): FormArray {
    console.log(this.individualForm.get('rows') as FormArray);
    return this.individualForm.get('rows') as FormArray;
  }

  /**
   * Adds a new row to the page data
   */
  addRow() {
    this.rows.push(this.formBuilder.group(new TableRow()));
  }

  /**
   * Removes the last row from the page data
   */
  removeRow() {
  }

  /**
   * Calls console log for use in HTML Template
   * @param message The message to display in the log
   */
  log(message: string | number) {
    console.log(message);
  }

}
