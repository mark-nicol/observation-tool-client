/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http"
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TreeModule} from "angular-tree-component";
import {ContextMenuModule} from "ngx-contextmenu";
import { AppRoutingModule } from "./app-routing.module"

/* Web faking */
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from "./services/in-memory-data.service"

/* Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from "./components/navbar/navbar.component"
import { PiEntryComponent } from "./components/pi-entry/pi-entry.component"
import { PiSearchComponent } from "./components/pi-entry/pi-search/pi-search.component"
import { ProjectInfoComponent } from "./components/pi-entry/project-info/project-info.component"
import { PiSelectComponent } from "./components/pi-select/pi-select.component"
import { RefinePanelComponent } from "./components/pi-select/refine-panel/refine-panel.component"
import { ResultsTableComponent } from "./components/pi-select/results-table/results-table.component"
import { SidenavComponent } from "./components/sidenav/sidenav.component"

/* Services */
import { PrimaryInvestigatorService } from "./services/primary-investigator.service";
import {AutofocusDirective} from "./directives/autofocus.directive";
import {ProjectComponent} from "./components/project/project.component";
import {ProposalComponent} from "./components/proposal/proposal.component";
import {PlannedObservingComponent} from "./components/planned-observing/planned-observing.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import { ModularPanelComponent } from './components/modular-panel/modular-panel.component';
import { SpacialImageComponent } from './components/field-setup/spacial-image/spacial-image.component';
import { FovParametersComponent } from './components/field-setup/fov-parameters/fov-parameters.component';
import { ImageQueryComponent } from './components/field-setup/image-query/image-query.component';
import {DragulaModule} from "ng2-dragula";
import { FieldSetupComponent } from './components/field-setup/field-setup.component';
import { SourceComponent } from './components/field-setup/source/source.component';
import { SourceExpectedPropertiesComponent } from './components/field-setup/source-expected-properties/source-expected-properties.component';
import { FieldCenterCoordinatesComponent } from './components/field-setup/field-center-coordinates/field-center-coordinates.component';
import { SexagesimalPipe } from './pipes/sexagesimal.pipe';
import { DegreesPipe } from './pipes/degrees.pipe';
import { DelayTooltipDirective } from './directives/delay-tooltip.directive';

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
    SidenavComponent,
    SourceComponent,
    SourceExpectedPropertiesComponent,
    SpacialImageComponent,
    AutofocusDirective,
    DelayTooltipDirective,
    DegreesPipe,
    SexagesimalPipe,
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    FormsModule,
    ReactiveFormsModule,
    TreeModule,
    ContextMenuModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  providers: [
    PrimaryInvestigatorService
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
