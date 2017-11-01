import {NgModule} from '@angular/core';
import {Longitude} from './classes/longitude';
import {LongitudeConversionService} from './services/longitude-conversion.service';

@NgModule({
  declarations: [
    Longitude,
    LongitudeConversionService
  ],
  exports: [Longitude]
})

export class UnitsModule {}
