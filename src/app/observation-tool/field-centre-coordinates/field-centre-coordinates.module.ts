import {NgModule} from '@angular/core';
import {FccIndividualComponent} from './components/fcc-individual/fcc-individual.component';
import {FccRectangularComponent} from './components/fcc-rectangular/fcc-rectangular.component';
import {FieldCenterCoordinatesComponent} from './field-center-coordinates.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    FccIndividualComponent,
    FccRectangularComponent,
    FieldCenterCoordinatesComponent
  ],
  providers: [],
  exports: [
    FieldCenterCoordinatesComponent
  ]
})

export class FieldCentreCoordinatesModule {
}
