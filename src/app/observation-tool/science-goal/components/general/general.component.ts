import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ScienceGoal} from '../../../shared/classes/science-goal/science-goal';
import {PersistenceService} from '../../../shared/services/persistence.service';

/**
 * General science goal page component
 */

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})

export class GeneralComponent implements OnInit {

  generalForm: FormGroup;
  scienceGoal: ScienceGoal;

  constructor(private persistenceService: PersistenceService,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.persistenceService.loadedProposal.subscribe(result => {
      if (result.prj_ScienceGoal[0]) {
        this.generalForm.patchValue(result.prj_ScienceGoal[this.persistenceService.currentGoal]);
      } else {
        this.generalForm.patchValue(result.prj_ScienceGoal);
      }
    })
  }

  createForm() {
    this.generalForm = this.formBuilder.group({
      prj_name: '',
      prj_note: ''
    });
  }

}
