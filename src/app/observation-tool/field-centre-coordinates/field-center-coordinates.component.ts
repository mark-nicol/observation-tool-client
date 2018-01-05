import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CURRENT_PROJECT} from '../shared/data/current-project';
import {CURRENT_SCIENCE_GOAL} from '../shared/data/current-science-goal';
import {CURRENT_SOURCE} from '../shared/data/current-source';
import {FieldCentreCoordinatesInterface} from '../shared/interfaces/science-goal-interfaces/field-setup-interfaces/field-centre-coordinates.interface';
import {PersistenceService} from '../shared/services/persistence.service';

/**
 * Handles the Field Centre Coordinates component in the Field Setup
 */

@Component({
             selector: 'field-center-coordinates',
             templateUrl: './field-center-coordinates.component.html',
             styleUrls: ['./field-center-coordinates.component.css'],
           })
export class FieldCenterCoordinatesComponent implements OnInit {

  /** The page data from the fieldSetupService */
  data: FieldCentreCoordinatesInterface;
  fieldCentreCoordinatesForm: FormGroup;
  individualForm: FormGroup;
  rectangularForm: FormGroup;

  /** Field Setup Service to be used in HTML template */
  protected _persistenceService: PersistenceService;

  /**
   * Sets _fieldSetupService and retrieves page data
   * @param persistenceService Injected service
   * @param formBuilder
   */
  constructor(private persistenceService: PersistenceService, private formBuilder: FormBuilder) {
    this.fieldCentreCoordinatesForm = formBuilder.group({
                                                          coordType: '',
                                                          targetType: '',
                                                          individual: formBuilder.group({}),
                                                          rectangular: formBuilder.group({
                                                                                           chosenSystem: '',
                                                                                           sexagesimalUnits: false,
                                                                                           lonOffsetUnit: '',
                                                                                           lonOffsetValue: 0.0,
                                                                                           latOffsetUnit: '',
                                                                                           latOffsetValue: 0.0,
                                                                                           pLengthUnit: '',
                                                                                           pLengthValue: 0.0,
                                                                                           qLengthUnit: '',
                                                                                           qLengthValue: 0.0,
                                                                                           positionAngleUnit: '',
                                                                                           positionAngleValue: 0.0,
                                                                                           spacing: 0.0,
                                                                                           spacingUnits: ''
                                                                                         })
                                                        });
  }

  ngOnInit() {
    this.persistenceService.getSource(CURRENT_PROJECT, CURRENT_SCIENCE_GOAL, CURRENT_SOURCE)
        .subscribe(result => {
          const fcc = result.fieldCentreCoordinates;
          this.fieldCentreCoordinatesForm.patchValue({
                                                       coordType: fcc.coordType,
                                                       targetType: fcc.targetType,
                                                       individual: fcc.individual,
                                                       rectangular: {
                                                         chosenSystem: fcc.rectangular.chosenSystem,
                                                         sexagesimalUnits: fcc.rectangular.sexagesimalUnits,
                                                         lonOffsetUnit: fcc.rectangular.lonOffset.unit,
                                                         lonOffsetValue: fcc.rectangular.lonOffset.value,
                                                         latOffsetUnit: fcc.rectangular.latOffset.unit,
                                                         latOffsetValue: fcc.rectangular.latOffset.value,
                                                         pLengthUnit: fcc.rectangular.pLength.unit,
                                                         pLengthValue: fcc.rectangular.pLength.value,
                                                         qLengthUnit: fcc.rectangular.qLength.unit,
                                                         qLengthValue: fcc.rectangular.qLength.value,
                                                         positionAngleUnit: fcc.rectangular.positionAngle.unit,
                                                         positionAngleValue: fcc.rectangular.positionAngle.value,
                                                         spacing: fcc.rectangular.spacing,
                                                         spacingUnits: fcc.rectangular.spacingUnits
                                                       }
                                                     });
        })
  }


  /**
   * Handles changes to the chosen coordinate type, sets new type in page data
   * @param newCoordType
   */
  changeCoordType(newCoordType: string) {
    this.data.coordType = newCoordType;
  }

}
