import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {SharedModule} from '../shared/shared.module';
import {LineSelectionComponent} from './components/line-selection/line-selection.component';
import {TypeComponent} from './components/type/type.component';
import {VisualisationControlComponent} from './components/visualisation-control/visualisation-control.component';
import {VisualisationViewerComponent} from './components/visualisation-viewer/visualisation-viewer.component';
import {SpectralDataService} from './services/spectral-data.service';
import {SpectralSetupComponent} from './spectral-setup.component';

@NgModule({
  imports: [
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    SuiModule,
    HttpClientModule,
  ],
  declarations: [
    TypeComponent,
    VisualisationControlComponent,
    VisualisationViewerComponent,
    SpectralSetupComponent,
    LineSelectionComponent
  ],
  providers: [SpectralDataService],
  exports: [
    SpectralSetupComponent
  ],
  entryComponents: []
})

export class SpectralSetupModule {
}
