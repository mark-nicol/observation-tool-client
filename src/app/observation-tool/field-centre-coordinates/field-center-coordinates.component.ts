import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ISinglePoint} from '../shared/interfaces/project/science-goal/target-parameters.interface';
import {PersistenceService} from '../shared/services/persistence.service';
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

  fieldCentreCoordinatesForm: FormGroup;
  tableRows: ISinglePoint[];
  sourceCoordinatesSystem = 'ICRS';
  currentTarget           = 0;

  @ViewChild(FccIndividualComponent) individual: FccIndividualComponent;
  @ViewChild(FccRectangularComponent) rectangular: FccRectangularComponent;

  /** Field Setup Service to be used in HTML template */
  protected _persistenceService: PersistenceService;

  /**
   * Sets _fieldSetupService and retrieves page data
   * @param persistenceService Injected service
   * @param formBuilder
   * @param activatedRoute
   */
  constructor(private persistenceService: PersistenceService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) {
    this.fieldCentreCoordinatesForm = formBuilder.group({
      coordType: '',
      targetType: '',
      individual: formBuilder.group({
        offsetUnit: '',
        rows: this.formBuilder.array([])
      }),
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
        spacingValue: 0.0,
        spacingUnits: ''
      })
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.currentTarget = params.index;
      this.initComponent(this.currentTarget);
    });
    this.initComponent(this.currentTarget);
  }

  initComponent(targetIndex: number) {
    this.persistenceService.getScienceGoal()
        .subscribe(result => {
          this.sourceCoordinatesSystem = result.TargetParameters[targetIndex].sourceCoordinates.system;
          this.fieldCentreCoordinatesForm.patchValue({targetType: result.TargetParameters[targetIndex].type});
          if (result.TargetParameters[targetIndex].type === 'F_MultiplePoints') { // TODO Enum
            this.fieldCentreCoordinatesForm.patchValue({
              coordType: result.TargetParameters[targetIndex].SinglePoint[0].centre.type,
              individual: {
                offsetUnit: result.TargetParameters[targetIndex].SinglePoint[0].centre.latitude.unit
              }
            });
            this.tableRows = result.TargetParameters[targetIndex].SinglePoint;
            if (this.individual)
              this.individual.initComponent(this.tableRows);
          } else {
            const rect = result.TargetParameters[targetIndex].Rectangle;
            this.fieldCentreCoordinatesForm.patchValue({
              coordType: rect.centre.type,
              rectangular: {
                chosenSystem: rect.centre.system,
                sexagesimalUnits: rect.centre.type === 'ABSOLUTE',
                lonOffsetUnit: rect.centre.longitude.unit,
                lonOffsetValue: rect.centre.longitude.content,
                latOffsetUnit: rect.centre.latitude.unit,
                latOffsetValue: rect.centre.latitude.content,
                pLengthUnit: rect.long.unit,
                pLengthValue: rect.long.content,
                qLengthUnit: rect.short.unit,
                qLengthValue: rect.short.content,
                positionAngleUnit: rect.pALong.unit,
                positionAngleValue: rect.pALong.content,
                spacingValue: rect.spacing.content,
                spacingUnits: rect.spacing.userUnit
              }
            })
          }

        });
  }

}
