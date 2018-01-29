import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CURRENT_PROJECT} from '../../../shared/data/current-project';
import {CURRENT_SCIENCE_GOAL} from '../../../shared/data/current-science-goal';
import {CURRENT_SOURCE} from '../../../shared/data/current-source';
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
    // this.persistenceService.getSource(CURRENT_PROJECT, CURRENT_SCIENCE_GOAL, CURRENT_SOURCE)
    //     .subscribe(res => {
    //       const esp = res.expectedSourceProperties;
    //       this.expectedSourcePropertiesForm.setValue({
    //                                                    continuumFluxDensityUnit: esp.continuumFluxDensity.unit,
    //                                                    continuumFluxDensityValue: esp.continuumFluxDensity.value,
    //                                                    continuumPolarization: esp.continuumPolarization,
    //                                                    lineFluxDensityUnit: esp.lineFluxDensity.unit,
    //                                                    lineFluxDensityValue: esp.lineFluxDensity.value,
    //                                                    lineWidthUnit: esp.lineWidth.unit,
    //                                                    lineWidthValue: esp.lineWidth.value,
    //                                                    linePolarization: esp.linePolarization
    //                                                  })
    //     });
  }

}
