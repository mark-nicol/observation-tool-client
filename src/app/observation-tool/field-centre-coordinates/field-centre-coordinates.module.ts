import {NgModule} from '@angular/core';
import {FccIndividualComponent} from './components/fcc-individual/fcc-individual.component';
import {FccRectangularComponent} from './components/fcc-rectangular/fcc-rectangular.component';
import {FieldCenterCoordinatesComponent} from './components/field-centre-coordinates/field-center-coordinates.component';

@NgModule({
  imports: [],
  declarations: [
    FccIndividualComponent,
    FccRectangularComponent,
    FieldCenterCoordinatesComponent
  ],
  providers: [],
  exports: [FieldCenterCoordinatesComponent]
})

export class FieldCentreCoordinatesModule {
}
