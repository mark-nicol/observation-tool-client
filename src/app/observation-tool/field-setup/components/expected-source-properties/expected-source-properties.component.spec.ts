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

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {SuiModule} from 'ng2-semantic-ui';
import {ProjectService} from '../../../shared/services/project.service';

import {ExpectedSourcePropertiesComponent} from './expected-source-properties.component';


describe('ExpectedSourcePropertiesComponent', () => {
  let component: ExpectedSourcePropertiesComponent;
  let fixture: ComponentFixture<ExpectedSourcePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExpectedSourcePropertiesComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        SuiModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        ProjectService
      ]
    })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(ExpectedSourcePropertiesComponent);
    component = fixture.componentInstance;
    const formBuilder = new FormBuilder();
    component.form = this.formBuilder.group({
      ExpectedProperties: this.formBuilder.group({
        expectedPeakFluxDensity: this.formBuilder.group({unit: '', content: 0.0}),
        desiredCircularPolarizationPercentage: 0.0,
        expectedPeakLineFluxDensity: this.formBuilder.group({unit: '', content: 0.0}),
        expectedLineWidth: this.formBuilder.group({userUnit: '', content: 0.0}),
        desiredLinePolarizationPercentage: 0.0
      }),
      SinglePoint: this.formBuilder.array([]),
      index: -1,
      isMosaic: true,
      nonSiderealMotion: false,
      parallax: this.formBuilder.group({
        unit: '',
        content: 0.0
      }),
      pmDec: this.formBuilder.group({
        unit: '',
        content: 0.0
      }),
      pmRA: this.formBuilder.group({
        unit: '',
        content: 0.0
      }),
      solarSystemObject: 'Unspecified',
      sourceCoordinates: this.formBuilder.group({
        fieldName: 'None',
        latitude: this.formBuilder.group({
          unit: '',
          content: 0.0
        }),
        longitude: this.formBuilder.group({
          unit: '',
          content: 0.0
        }),
        system: 'ICRS',
        type: 'ABSOLUTE',
      }),
      sourceEphemeris: '',
      sourceName: ['', Validators.required],
      sourceVelocity: this.formBuilder.group({
        centerVelocity: this.formBuilder.group({
          unit: '',
          content: 0.0
        }),
        dopplerCalcType: '',
        redshift: 0,
        referenceSystem: '',
      }),
      type: '',
    });
    fixture.detectChanges();

  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
