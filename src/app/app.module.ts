import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http"
/* Modules */
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
/* Web faking */
// import {TreeModule} from "angular-tree-component";
import {DragulaModule} from "ng2-dragula";
// import {ContextMenuModule} from "ngx-contextmenu";
import {AppRoutingModule} from "./app-routing.module"
/* Components */
import {AppComponent} from './app.component';
import {ModularPanelComponent} from './components/modular-panel/modular-panel.component';
import {NavbarComponent} from "./components/navbar/navbar.component"
import {PiEntryComponent} from "./components/pi-entry/pi-entry.component"
import {PiSearchComponent} from "./components/pi-entry/pi-search/pi-search.component"
import {ProjectInfoComponent} from "./components/pi-entry/project-info/project-info.component"
import {PiSelectComponent} from "./components/pi-select/pi-select.component"
import {RefinePanelComponent} from "./components/pi-select/refine-panel/refine-panel.component"
import {ResultsTableComponent} from "./components/pi-select/results-table/results-table.component"
import {PlannedObservingComponent} from "./components/planned-observing/planned-observing.component";
import {ProjectComponent} from "./components/project/project.component";
import {ProposalComponent} from "./components/proposal/proposal.component";
import {CalibrationSetupComponent} from './components/science-goals/calibration-setup/calibration-setup.component';
import {ControlPerformanceComponent} from './components/science-goals/control-performance/control-performance.component';
import {FieldCenterCoordinatesComponent} from './components/science-goals/field-setup/field-center-coordinates/field-center-coordinates.component';
import {FieldSetupComponent} from './components/science-goals/field-setup/field-setup.component';
import {FovParametersComponent} from './components/science-goals/field-setup/fov-parameters/fov-parameters.component';
import {ImageQueryComponent} from './components/science-goals/field-setup/image-query/image-query.component';
import {SourceExpectedPropertiesComponent} from './components/science-goals/field-setup/source-expected-properties/source-expected-properties.component';
import {SourceComponent} from './components/science-goals/field-setup/source/source.component';
import {SpacialImageComponent} from './components/science-goals/field-setup/spacial-image/spacial-image.component';
import {GeneralComponent} from './components/science-goals/general/general.component';
import {ScienceGoalPage} from './models/science-goal-page';
import {ScienceGoalComponent} from './components/science-goals/science-goal.component';
import {SpectralSetupComponent} from './components/science-goals/spectral-setup/spectral-setup.component';
import {TypeComponent} from './components/science-goals/spectral-setup/type/type.component';
import {VisualisationComponent} from './components/science-goals/spectral-setup/visualisation/visualisation.component';
import {TechnicalJustificationComponent} from './components/science-goals/technical-justification/technical-justification.component';
// import {SidenavComponent} from "./components/sidenav/sidenav.component"
import {AutofocusDirective} from "./directives/autofocus.directive";
import {DelayTooltipDirective} from './directives/delay-tooltip.directive';
import {DegreesPipe} from './pipes/degrees.pipe';
import {SexagesimalPipe} from './pipes/sexagesimal.pipe';
/* Services */
import {PrimaryInvestigatorService} from "./services/primary-investigator.service";
import {ScienceGoalPanelService} from "./services/science-goal-panel.service";
import { SelectableComponent } from './components/selectable/selectable.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldCenterCoordinatesComponent,
    FieldSetupComponent,
    FovParametersComponent,
    ImageQueryComponent,
    ModularPanelComponent,
    NavbarComponent,
    PiEntryComponent,
    PiSearchComponent,
    PiSelectComponent,
    PlannedObservingComponent,
    ProjectComponent,
    ProjectInfoComponent,
    ProposalComponent,
    RefinePanelComponent,
    ResultsTableComponent,
    // SidenavComponent,
    SourceComponent,
    SourceExpectedPropertiesComponent,
    SpacialImageComponent,
    AutofocusDirective,
    DelayTooltipDirective,
    DegreesPipe,
    SexagesimalPipe,
    ScienceGoalComponent,
    GeneralComponent,
    SpectralSetupComponent,
    CalibrationSetupComponent,
    ControlPerformanceComponent,
    TechnicalJustificationComponent,
    VisualisationComponent,
    TypeComponent,
    SelectableComponent,
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    FormsModule,
    ReactiveFormsModule,
    // TreeModule,
    // ContextMenuModule,
    HttpModule,
    NgbModule.forRoot(),
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  providers: [
    PrimaryInvestigatorService,
    ScienceGoalPanelService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [ NavbarComponent ],
  entryComponents: [
    ModularPanelComponent,
    ImageQueryComponent,
    FovParametersComponent,
    SpacialImageComponent
  ]
})
export class AppModule { }
