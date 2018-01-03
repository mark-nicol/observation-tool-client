import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {TypeComponent} from './components/type/type.component';
import {VisualisationControlComponent} from './components/visualisation-control/visualisation-control.component';
import {VisualisationViewerComponent} from './components/visualisation-viewer/visualisation-viewer.component';
import {SpectralDataService} from './services/spectral-data.service';
import {SpectralSetupComponent} from './spectral-setup.component';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
  ],
  declarations: [
    TypeComponent,
    VisualisationControlComponent,
    VisualisationViewerComponent,
    SpectralSetupComponent
  ],
  providers: [SpectralDataService],
  exports: [
    SpectralSetupComponent
  ]
})

export class SpectralSetupModule {
}
