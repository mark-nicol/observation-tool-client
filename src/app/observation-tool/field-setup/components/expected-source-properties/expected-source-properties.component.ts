import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PersistenceService} from '../../../shared/services/persistence.service';

/**
 * Source Expected properties component
 */

@Component({
             selector: 'source-expected-properties',
             templateUrl: './expected-source-properties.component.html',
             styleUrls: ['./expected-source-properties.component.css']
           })
export class ExpectedSourcePropertiesComponent implements OnInit {

  data: any;
  expectedSourcePropertiesForm: FormGroup;

  constructor(private persistenceService: PersistenceService, private formBuilder: FormBuilder) {
    this.expectedSourcePropertiesForm = this.formBuilder.group({
                                                                 continuumFluxDensityUnit: '',
                                                                 continuumFluxDensityValue: 0.0,
                                                                 continuumPolarization: 0.0,
                                                                 lineFluxDensityUnit: '',
                                                                 lineFluxDensityValue: 0.0,
                                                                 lineWidthUnit: '',
                                                                 lineWidthValue: 0.0,
                                                                 linePolarization: 0.0
                                                               })
  }

  ngOnInit() {
    this.persistenceService.getScienceGoal()
        .subscribe(result => {
          const esp = result.TargetParameters[this.persistenceService.currentTarget].ExpectedProperties;
          this.expectedSourcePropertiesForm.patchValue({
                                                       continuumFluxDensityUnit: esp.expectedPeakFluxDensity.unit,
                                                       continuumFluxDensityValue: esp.expectedPeakFluxDensity.content,
                                                       continuumPolarization: esp.desiredCircularPolarizationPercentage,
                                                       lineFluxDensityUnit: esp.expectedPeakLineFluxDensity.unit,
                                                       lineFluxDensityValue: esp.expectedPeakLineFluxDensity.content,
                                                       lineWidthUnit: esp.expectedLineWidth.userUnit,
                                                       lineWidthValue: esp.expectedLineWidth.content,
                                                       linePolarization: esp.desiredLinePolarizationPercentage
                                                     })
        });
  }

}
