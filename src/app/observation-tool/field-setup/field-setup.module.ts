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

import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {SharedModule} from '../shared/shared.module';
import {AladinComponent} from './components/aladin/aladin.component';
import {ExpectedSourcePropertiesComponent} from './components/expected-source-properties/expected-source-properties.component';
import {FieldCenterCoordinatesComponent} from './components/field-centre-coordinates/field-center-coordinates.component';
import {FovParametersComponent} from './components/fov-parameters/fov-parameters.component';
import {ImageQueryComponent} from './components/image-query/image-query.component';
import {PointingCanvasComponent} from './components/pointing-canvas/pointing-canvas.component';
import {SourceComponent} from './components/source/source.component';
import {SpacialImageComponent} from './components/spacial-image/spacial-image.component';
import {FieldSetupComponent} from './field-setup.component';
import {AladinService} from './services/aladin.service';
import { SegmentComponent } from './components/segment/segment.component';

@NgModule({
  imports: [
    SharedModule,
    SuiModule,
    ReactiveFormsModule
  ],
  declarations: [
    FieldCenterCoordinatesComponent,
    FieldSetupComponent,
    FovParametersComponent,
    ImageQueryComponent,
    ExpectedSourcePropertiesComponent,
    SourceComponent,
    SpacialImageComponent,
    AladinComponent,
    PointingCanvasComponent,
    SegmentComponent
  ],
  providers: [
    AladinService
  ],
  exports: [FieldSetupComponent]
})

export class FieldSetupModule {
}
