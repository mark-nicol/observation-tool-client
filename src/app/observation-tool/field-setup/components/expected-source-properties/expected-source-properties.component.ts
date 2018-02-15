import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
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

  expectedSourcePropertiesForm: FormGroup;
  currentTarget = 0;

  constructor(private persistenceService: PersistenceService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) {
    this.expectedSourcePropertiesForm = this.formBuilder.group({
      expectedPeakFluxDensity: this.formBuilder.group({unit: '', content: 0.0}),
      desiredCircularPolarizationPercentage: 0.0,
      expectedPeakLineFluxDensity: this.formBuilder.group({unit: '', content: 0.0}),
      expectedLineWidth: this.formBuilder.group({userUnit: '', content: 0.0}),
      desiredLinePolarizationPercentage: 0.0
    })
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
          const esp = result.TargetParameters[targetIndex].ExpectedProperties;
          this.expectedSourcePropertiesForm.patchValue({
            expectedPeakFluxDensity: esp.expectedPeakFluxDensity,
            desiredCircularPolarizationPercentage: esp.desiredCircularPolarizationPercentage,
            expectedPeakLineFluxDensity: esp.expectedPeakLineFluxDensity,
            expectedLineWidth: esp.expectedLineWidth,
            desiredLinePolarizationPercentage: esp.desiredLinePolarizationPercentage
          })
        });
  }

}
