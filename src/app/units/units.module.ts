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
import {AngleConversionService} from './services/angle-conversion.service';
import {AngularVelocityConversionService} from './services/angular-velocity-conversion.service';
import {FrequencyConversionService} from './services/frequency-conversion.service';
import {LatitudeConversionService} from './services/latitude-conversion.service';
import {LengthConversionService} from './services/length-conversion.service';
import {LongitudeConversionService} from './services/longitude-conversion.service';
import {SensitivityConversionService} from './services/sensitivity-conversion.service';
import {SpeedConversionService} from './services/speed-conversion.service';

@NgModule({
  declarations: [
    // Angle,
    // AngularVelocity,
    // Frequency,
    // Latitude,
    // Length,
    // Longitude,
    // Sensitivity,
    // Speed,
  ],
  providers: [
    AngleConversionService,
    AngularVelocityConversionService,
    FrequencyConversionService,
    LatitudeConversionService,
    LengthConversionService,
    LongitudeConversionService,
    SensitivityConversionService,
    SpeedConversionService,
  ],
  exports: [
    // Angle,
    // AngularVelocity,
    // Frequency,
    // Latitude,
    // Length,
    // Longitude,
    // Sensitivity,
    // Speed
  ]
})

export class UnitsModule {
}
