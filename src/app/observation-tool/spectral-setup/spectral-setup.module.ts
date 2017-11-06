import {NgModule} from '@angular/core';
import {TypeComponent} from './components/type/type.component';
import {VisualisationControlComponent} from './components/visualisation-control/visualisation-control.component';
import {VisualisationViewerComponent} from './components/visualisation-viewer/visualisation-viewer.component';
import {SpectralSetupComponent} from './spectral-setup.component';

@NgModule({
  imports: [],
  declarations: [
    TypeComponent,
    VisualisationViewerComponent,
    VisualisationControlComponent,
    SpectralSetupComponent
  ],
  providers: [],
  exports: [SpectralSetupComponent]
})

export class SpectralSetupModule {
}
