/*
 * ALMA - Atacama Large Millimeter Array
 * Copyright (c) UKATC - UK Astronomy Technology Centre, Science and Technology Facilities Council, 2018
 * (in the framework of the ALMA collaboration).
 * All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307  USA
 */

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
      name: '',
      note: ''
    });
  }

  observeFormChanges() {
    const debounce = this.form.valueChanges.debounce(() => Observable.interval(1500));
    debounce.subscribe(value => {
      if (this.form.dirty && this.form.valid) {
      }
    });
  }

}
