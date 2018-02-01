import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CURRENT_SOURCE} from '../shared/data/current-source';
import {ISinglePoint} from '../shared/interfaces/project/science-goal/target-parameters.interface';
import {PersistenceService} from '../shared/services/persistence.service';

/**
 * Handles the Field Centre Coordinates component in the Field Setup
 */

@Component({
             selector:    'field-center-coordinates',
             templateUrl: './field-center-coordinates.component.html',
             styleUrls:   ['./field-center-coordinates.component.css'],
           })
export class FieldCenterCoordinatesComponent implements OnInit {

  fieldCentreCoordinatesForm: FormGroup;
  tableRows: ISinglePoint[];

  /** Field Setup Service to be used in HTML template */
  protected _persistenceService: PersistenceService;

  /**
   * Sets _fieldSetupService and retrieves page data
   * @param persistenceService Injected service
   * @param formBuilder
   */
  constructor(private persistenceService: PersistenceService, private formBuilder: FormBuilder) {
    this.fieldCentreCoordinatesForm = formBuilder.group({
                                                          coordType:   '',
                                                          targetType:  '',
                                                          individual:  formBuilder.group({
                                                                                           offsetUnit: '',
                                                                                           rows:       this.formBuilder.array([])
                                                                                         }),
                                                          rectangular: formBuilder.group({
                                                                                           chosenSystem:       '',
                                                                                           sexagesimalUnits:   false,
                                                                                           lonOffsetUnit:      '',
                                                                                           lonOffsetValue:     0.0,
                                                                                           latOffsetUnit:      '',
                                                                                           latOffsetValue:     0.0,
                                                                                           pLengthUnit:        '',
                                                                                           pLengthValue:       0.0,
                                                                                           qLengthUnit:        '',
                                                                                           qLengthValue:       0.0,
                                                                                           positionAngleUnit:  '',
                                                                                           positionAngleValue: 0.0,
                                                                                           spacing:            0.0,
                                                                                           spacingUnits:       ''
                                                                                         })
                                                        });
  }

  ngOnInit() {
    this.persistenceService.getScienceGoal()
        .subscribe(result => {
          console.log(result.TargetParameters[CURRENT_SOURCE].type);
          this.fieldCentreCoordinatesForm.patchValue({targetType: result.TargetParameters[CURRENT_SOURCE].type});
          if (result.TargetParameters[CURRENT_SOURCE].type === 'F_MultiplePoints') { // TODO Enum
            console.log(result.TargetParameters[CURRENT_SOURCE]);
            this.fieldCentreCoordinatesForm.patchValue({
                                                         coordType:  result.TargetParameters[CURRENT_SOURCE].SinglePoint[0].centre.type,
                                                         individual: {
                                                           offsetUnit: result.TargetParameters[CURRENT_SOURCE].SinglePoint[0].centre.latitude.unit
                                                         }
                                                       });
            this.tableRows = result.TargetParameters[CURRENT_SOURCE].SinglePoint;
          } else {
            console.log('Rectangular');
          }
          // this.tableRows = fcc.individual.rows;
          // this.fieldCentreCoordinatesForm.patchValue({
          // coordType: fcc.coordType,
          // targetType: fcc.targetType,
          //                                              individual: {
          //                                                offsetUnit: fcc.individual.offsetUnit
          //                                              },
          //                                              rectangular: {
          //                                                chosenSystem: fcc.rectangular.chosenSystem,
          //                                                sexagesimalUnits: fcc.rectangular.sexagesimalUnits,
          //                                                lonOffsetUnit: fcc.rectangular.lonOffset.unit,
          //                                                lonOffsetValue: fcc.rectangular.lonOffset.content,
          //                                                latOffsetUnit: fcc.rectangular.latOffset.unit,
          //                                                latOffsetValue: fcc.rectangular.latOffset.content,
          //                                                pLengthUnit: fcc.rectangular.pLength.unit,
          //                                                pLengthValue: fcc.rectangular.pLength.content,
          //                                                qLengthUnit: fcc.rectangular.qLength.unit,
          //                                                qLengthValue: fcc.rectangular.qLength.content,
          //                                                positionAngleUnit: fcc.rectangular.positionAngle.unit,
          //                                                positionAngleValue: fcc.rectangular.positionAngle.content,
          //                                                spacing: fcc.rectangular.spacing,
          //                                                spacingUnits: fcc.rectangular.spacingUnits
          //                                              }
          //                                            });

        })
  }

}
