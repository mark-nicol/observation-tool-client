import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DragulaModule} from 'ng2-dragula';
import {SuiModule} from 'ng2-semantic-ui';
import {FieldCentreCoordinatesModule} from '../field-centre-coordinates/field-centre-coordinates.module';
import {SharedModule} from '../shared/shared.module';
import {FovParametersComponent} from './components/fov-parameters/fov-parameters.component';
import {ImageQueryComponent} from './components/image-query/image-query.component';
import {ExpectedSourcePropertiesComponent} from './components/expected-source-properties/expected-source-properties.component';
import {SourceComponent} from './components/source/source.component';
import {SpacialImageComponent} from './components/spacial-image/spacial-image.component';
import {FieldSetupComponent} from './field-setup.component';

@NgModule({
  imports: [
    FieldCentreCoordinatesModule,
    DragulaModule,
    SharedModule,
    SuiModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    FieldSetupComponent,
    FovParametersComponent,
    ImageQueryComponent,
    ExpectedSourcePropertiesComponent,
    SourceComponent,
    SpacialImageComponent
  ],
  providers: [],
  exports: [FieldSetupComponent]
})

export class FieldSetupModule {
}
