import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ScienceGoal} from '../../../shared/classes/science-goal/science-goal';
import {ProjectService} from '../../../shared/services/project.service';

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

  constructor(private persistenceService: ProjectService,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.persistenceService.loadedGoal.subscribe(result => {
      this.generalForm.patchValue(result);
    })
  }

  createForm() {
    this.generalForm = this.formBuilder.group({
      prj_name: '',
      prj_note: ''
    });
  }

}
