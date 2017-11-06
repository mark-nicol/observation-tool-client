/* Modules */
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DragulaModule} from 'ng2-dragula';
import {AppRoutingModule} from './app-routing.module'
/* Components */
import {AppComponent} from './app.component';
import {NavbarComponent} from './observation-tool/components/navbar/navbar.component'
import {CalibrationSetupComponent} from './observation-tool/components/science-goals/calibration-setup/calibration-setup.component';
import {ControlPerformanceComponent} from './observation-tool/components/science-goals/control-performance/control-performance.component';
import {FccIndividualComponent} from './observation-tool/components/science-goals/field-setup/field-center-coordinates/fcc-individual/fcc-individual.component';
import {FccRectangularComponent} from './observation-tool/components/science-goals/field-setup/field-center-coordinates/fcc-rectangular/fcc-rectangular.component';
import {FieldCenterCoordinatesComponent} from './observation-tool/components/science-goals/field-setup/field-center-coordinates/field-center-coordinates.component';
import {FieldSetupComponent} from './observation-tool/components/science-goals/field-setup/field-setup.component';
import {FovParametersComponent} from './observation-tool/components/science-goals/field-setup/fov-parameters/fov-parameters.component';
import {ImageQueryComponent} from './observation-tool/components/science-goals/field-setup/image-query/image-query.component';
import {SourceExpectedPropertiesComponent} from './observation-tool/components/science-goals/field-setup/source-expected-properties/source-expected-properties.component';
import {SourceComponent} from './observation-tool/components/science-goals/field-setup/source/source.component';
import {SpacialImageComponent} from './observation-tool/components/science-goals/field-setup/spacial-image/spacial-image.component';
import {SystemSelectorComponent} from './observation-tool/components/science-goals/field-setup/system-selector/system-selector.component';
import {GeneralComponent} from './observation-tool/components/science-goals/general/general.component';
import {ScienceGoalComponent} from './observation-tool/components/science-goals/science-goal.component';
import {SpectralSetupComponent} from './observation-tool/components/science-goals/spectral-setup/spectral-setup.component';
import {TypeComponent} from './observation-tool/components/science-goals/spectral-setup/type/type.component';
import {VisualisationControlComponent} from './observation-tool/components/science-goals/spectral-setup/visualisation-control/visualisation-control.component';
import {VisualisationViewerComponent} from './observation-tool/components/science-goals/spectral-setup/visualisation-viewer/visualisation-viewer.component';
import {TechnicalJustificationComponent} from './observation-tool/components/science-goals/technical-justification/technical-justification.component';
import {SelectableComponent} from './observation-tool/components/selectable/selectable.component';
import {FieldSetupService} from './observation-tool/services/field-setup.service';
/* Services */
import {ScienceGoalPanelService} from './observation-tool/services/science-goal-panel.service';
import {PiSelectionModule} from './observation-tool/pi-selection/pi-selection.module';
import {SharedModule} from './observation-tool/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FieldCenterCoordinatesComponent,
    FieldSetupComponent,
    FovParametersComponent,
    ImageQueryComponent,
    NavbarComponent,
    SourceComponent,
    SourceExpectedPropertiesComponent,
    SpacialImageComponent,
    ScienceGoalComponent,
    GeneralComponent,
    SpectralSetupComponent,
    CalibrationSetupComponent,
    ControlPerformanceComponent,
    TechnicalJustificationComponent,
    VisualisationControlComponent,
    TypeComponent,
    SelectableComponent,
    FccIndividualComponent,
    FccRectangularComponent,
    SystemSelectorComponent,
    VisualisationViewerComponent,
  ],
  imports: [
    SharedModule,
    PiSelectionModule,
    BrowserModule,
    DragulaModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    ScienceGoalPanelService,
    FieldSetupService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [],

})
export class AppModule {
}
