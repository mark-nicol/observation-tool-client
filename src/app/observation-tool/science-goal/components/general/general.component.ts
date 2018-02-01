import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ScienceGoal} from '../../../shared/classes/science-goal/science-goal';
import {PersistenceService} from '../../../shared/services/persistence.service';

/**
 * General science goal page component
 */

@Component({
             selector:    'app-general',
             templateUrl: './general.component.html',
             styleUrls:   ['./general.component.scss']
           })

export class GeneralComponent implements OnInit {

  generalForm: FormGroup;
  scienceGoal: ScienceGoal;

  constructor(private persistenceService: PersistenceService,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.persistenceService.getScienceGoal().subscribe(result => {
      this.generalForm.patchValue(result);
    })
  }

  createForm() {
    this.generalForm = this.formBuilder.group({
                                                name: '',
                                                note: ''
                                              });
  }

}
