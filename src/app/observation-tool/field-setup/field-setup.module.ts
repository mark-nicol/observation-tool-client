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
import {CanvasService} from './services/canvas.service';

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
    PointingCanvasComponent
  ],
  providers: [
    AladinService,
    CanvasService
  ],
  exports: [FieldSetupComponent]
})

export class FieldSetupModule {
}
