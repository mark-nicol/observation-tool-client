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
import {FormsModule} from '@angular/forms';
import {ProjectService} from '../../../shared/services/project.service';
import {AladinComponent} from '../aladin/aladin.component';

import {SpacialImageComponent} from './spacial-image.component';

describe('SpacialImageComponent', () => {
  let component: SpacialImageComponent;
  let fixture: ComponentFixture<SpacialImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     declarations: [
                                       SpacialImageComponent,
                                       AladinComponent
                                     ],
                                     imports:      [
                                       FormsModule,
                                       HttpClientTestingModule
                                     ],
                                     providers:    [
                                       ProjectService
                                     ]
                                   })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(SpacialImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
