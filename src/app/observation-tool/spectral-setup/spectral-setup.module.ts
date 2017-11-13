import {NgModule} from '@angular/core';
import {TypeComponent} from './components/type/type.component';
import {VisualisationControlComponent} from './components/visualisation-control/visualisation-control.component';
import {VisualisationViewerComponent} from './components/visualisation-viewer/visualisation-viewer.component';
import {SpectralSetupComponent} from './spectral-setup.component';
import {SharedModule} from '../shared/shared.module';
import {SpectralDataService} from './services/spectral-data.service';
import {PapaParseModule} from 'ngx-papaparse';

@NgModule({
  imports: [
    SharedModule,
    PapaParseModule
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
