import {NgModule} from '@angular/core';
import {Angle} from './classes/angle';
import {AngularVelocity} from './classes/angular-velocity';
import {Frequency} from './classes/frequency';
import {Latitude} from './classes/latitude';
import {Length} from './classes/length';
import {Longitude} from './classes/longitude';
import {Sensitivity} from './classes/sensitivity';
import {Speed} from './classes/speed';
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
