import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SuiModule} from 'ng2-semantic-ui';
import {SharedModule} from '../shared/shared.module';
import {TypeComponent} from './components/type/type.component';
import {VisualisationControlComponent} from './components/visualisation-control/visualisation-control.component';
import {VisualisationViewerComponent} from './components/visualisation-viewer/visualisation-viewer.component';
import {SpectralDataService} from './services/spectral-data.service';
import {SpectralSetupComponent} from './spectral-setup.component';
import { SpectralLineModalComponent } from './components/spectral-line-modal/spectral-line-modal.component';

@NgModule({
  imports: [
    // BrowserAnimationsModule,
    SharedModule,
    SuiModule,
    HttpClientModule,
  ],
  declarations: [
    TypeComponent,
    VisualisationControlComponent,
    VisualisationViewerComponent,
    SpectralSetupComponent,
    SpectralLineModalComponent
  ],
  providers: [SpectralDataService],
  exports: [
    SpectralSetupComponent
  ],
  entryComponents: [SpectralLineModalComponent]
})

export class SpectralSetupModule {
}
