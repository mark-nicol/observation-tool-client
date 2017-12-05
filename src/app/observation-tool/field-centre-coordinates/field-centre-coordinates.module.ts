import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SuiModule} from 'ng2-semantic-ui';
import {SharedModule} from '../shared/shared.module';
import {FccIndividualComponent} from './components/fcc-individual/fcc-individual.component';
import {FccRectangularComponent} from './components/fcc-rectangular/fcc-rectangular.component';
import {FieldCenterCoordinatesComponent} from './field-center-coordinates.component';

@NgModule({
  imports: [
    SharedModule,
    SuiModule,
    NgbModule.forRoot(),
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
