import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProjectService} from '../../../shared/services/project.service';
import {Observable} from '../../../../../../node_modules/rxjs';
import {IScienceGoal} from '../../../shared/interfaces/apdm/science-goal.interface';

/**
 * General science goal page component
 */

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})

export class GeneralComponent implements OnInit {

  form: FormGroup;
  scienceGoal: IScienceGoal;

  constructor(private projectService: ProjectService,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.projectService.loadedGoal.subscribe(result => {
      this.form.patchValue(result);
    });
    this.observeFormChanges();
  }

  createForm() {
    this.form = this.formBuilder.group({
      prj_name: '',
      prj_note: ''
    });
  }

  observeFormChanges() {
    const debounce = this.form.valueChanges.debounce(() => Observable.interval(1500));
    debounce.subscribe(value => {
      if (this.form.dirty && this.form.valid) {
        this.projectService.updateScienceGoal(value);
      }
    });
  }

}
