import {NgModule} from '@angular/core';
import {FieldSetupComponent} from './field-setup.component';
import {FieldSetupService} from './services/field-setup.service';
import {FovParametersComponent} from './components/fov-parameters/fov-parameters.component';
import {ImageQueryComponent} from './components/image-query/image-query.component';
import {SourceExpectedPropertiesComponent} from './components/source-expected-properties/source-expected-properties.component';
import {SpacialImageComponent} from './components/spacial-image/spacial-image.component';

@NgModule({
  imports: [],
  declarations: [
    FovParametersComponent,
    ImageQueryComponent,
    SourceExpectedPropertiesComponent,
    SpacialImageComponent
  ],
  providers: [FieldSetupService],
  exports: [FieldSetupComponent]
})

export class FieldSetupModule { }
