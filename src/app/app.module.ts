// import {ContextMenuModule} from "ngx-contextmenu";
// import {TreeModule} from "angular-tree-component";
// import {SidenavComponent} from "./components/sidenav/sidenav.component"
/* Modules */
import {NgModule}                         from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule}                       from '@angular/http'
import {BrowserModule}                    from '@angular/platform-browser';
import {NgbModule}                        from '@ng-bootstrap/ng-bootstrap';
import {DragulaModule}                    from 'ng2-dragula';
import {AppRoutingModule}                 from './app-routing.module'
/* Components */
import {AppComponent}                      from './app.component';
import {ModularPanelComponent}             from './components/modular-panel/modular-panel.component';
import {NavbarComponent}                   from './components/navbar/navbar.component'
import {PiEntryComponent}                  from './components/pi-entry/pi-entry.component'
import {PiSearchComponent}                 from './components/pi-entry/pi-search/pi-search.component'
import {ProjectInfoComponent}              from './components/pi-entry/project-info/project-info.component'
import {PiSelectComponent}                 from './components/pi-select/pi-select.component'
import {RefinePanelComponent}              from './components/pi-select/refine-panel/refine-panel.component'
import {ResultsTableComponent}             from './components/pi-select/results-table/results-table.component'
import {PlannedObservingComponent}         from './components/planned-observing/planned-observing.component';
import {ProjectComponent}                  from './components/project/project.component';
import {ProposalComponent}                 from './components/proposal/proposal.component';
import {CalibrationSetupComponent}         from './components/science-goals/calibration-setup/calibration-setup.component';
import {ControlPerformanceComponent}       from './components/science-goals/control-performance/control-performance.component';
import {FccIndividualComponent}            from './components/science-goals/field-setup/field-center-coordinates/fcc-individual/fcc-individual.component';
import {FccRectangularComponent}           from './components/science-goals/field-setup/field-center-coordinates/fcc-rectangular/fcc-rectangular.component';
import {FieldCenterCoordinatesComponent}   from './components/science-goals/field-setup/field-center-coordinates/field-center-coordinates.component';
import {FieldSetupComponent}               from './components/science-goals/field-setup/field-setup.component';
import {FovParametersComponent}            from './components/science-goals/field-setup/fov-parameters/fov-parameters.component';
import {ImageQueryComponent}               from './components/science-goals/field-setup/image-query/image-query.component';
import {SourceExpectedPropertiesComponent} from './components/science-goals/field-setup/source-expected-properties/source-expected-properties.component';
import {SourceComponent}                   from './components/science-goals/field-setup/source/source.component';
import {SpacialImageComponent}             from './components/science-goals/field-setup/spacial-image/spacial-image.component';
import {SystemSelectorComponent}           from './components/science-goals/field-setup/system-selector/system-selector.component';
import {GeneralComponent}                  from './components/science-goals/general/general.component';
import {ScienceGoalComponent}              from './components/science-goals/science-goal.component';
import {SpectralSetupComponent}            from './components/science-goals/spectral-setup/spectral-setup.component';
import {TypeComponent}                     from './components/science-goals/spectral-setup/type/type.component';
import {VisualisationComponent}            from './components/science-goals/spectral-setup/visualisation/visualisation.component';
import {TechnicalJustificationComponent}   from './components/science-goals/technical-justification/technical-justification.component';
import {SelectableComponent}               from './components/selectable/selectable.component';
/* Directives */
import {AutofocusDirective}    from './directives/autofocus.directive';
import {DelayTooltipDirective} from './directives/delay-tooltip.directive';
/*Pipes*/
import {DegreesPipe}     from './pipes/degrees.pipe';
import {SexagesimalPipe} from './pipes/sexagesimal.pipe';
/* Services */
import {FieldSetupService}          from './services/field-setup.service';
import {PrimaryInvestigatorService} from './services/primary-investigator.service';
import {ScienceGoalPanelService}    from './services/science-goal-panel.service';

@NgModule({
  declarations: [
    // SidenavComponent,
    /* Components */
    AppComponent,
    CalibrationSetupComponent,
    ControlPerformanceComponent,
    FccIndividualComponent,
    FccRectangularComponent,
    FieldCenterCoordinatesComponent,
    FieldSetupComponent,
    FovParametersComponent,
    GeneralComponent,
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
    ScienceGoalComponent,
    SelectableComponent,
    SourceComponent,
    SourceExpectedPropertiesComponent,
    SpacialImageComponent,
    SpectralSetupComponent,
    SystemSelectorComponent,
    TechnicalJustificationComponent,
    TypeComponent,
    VisualisationComponent,
    /* Directives */
    AutofocusDirective,
    DelayTooltipDirective,
    /* Pipes */
    DegreesPipe,
    SexagesimalPipe,
  ],
  imports: [
    // ContextMenuModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    // TreeModule,
    BrowserModule,
    DragulaModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule // Must be last
  ],
  providers: [
    FieldSetupService,
    PrimaryInvestigatorService,
    ScienceGoalPanelService,
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [],
  entryComponents: []
})
export class AppModule {
}
