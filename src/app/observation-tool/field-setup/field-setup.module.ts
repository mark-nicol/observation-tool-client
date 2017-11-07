import {NgModule} from '@angular/core';
import {FieldCentreCoordinatesModule} from '../field-centre-coordinates/field-centre-coordinates.module';
import {SharedModule} from '../shared/shared.module';
import {FovParametersComponent} from './components/fov-parameters/fov-parameters.component';
import {ImageQueryComponent} from './components/image-query/image-query.component';
import {SourceExpectedPropertiesComponent} from './components/source-expected-properties/source-expected-properties.component';
import {SourceComponent} from './components/source/source.component';
import {SpacialImageComponent} from './components/spacial-image/spacial-image.component';
import {FieldSetupComponent} from './field-setup.component';

@NgModule({
  imports: [
    FieldCentreCoordinatesModule,
    SharedModule,
  ],
  declarations: [
    FieldSetupComponent,
    FovParametersComponent,
    ImageQueryComponent,
    SourceExpectedPropertiesComponent,
    SourceComponent,
    SpacialImageComponent
  ],
  providers: [],
  exports: [FieldSetupComponent]
})

export class FieldSetupModule { }
