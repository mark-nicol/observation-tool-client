/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http"
import {FormsModule} from "@angular/forms";
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
import {Autofocus} from "./directives/autofocus.directive";
import {ProjectComponent} from "./components/project/project.component";
import {ProposalComponent} from "./components/proposal/proposal.component";
import {PlannedObservingComponent} from "./components/planned-observing/planned-observing.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ModularPanelComponent } from './components/modular-panel/modular-panel.component';
import { SpacialImageComponent } from './components/spacial-image/spacial-image.component';
import { FovParametersComponent } from './components/fov-parameters/fov-parameters.component';
import { ImageQueryComponent } from './components/image-query/image-query.component';
import { PanelBodyDirective } from './directives/panel-body.directive';
import { ModularPanelControllerComponent } from './components/modular-panel-controller/modular-panel-controller.component';
import { ModularPanelLoaderComponent } from './components/modular-panel-loader/modular-panel-loader.component';
import { PanelHostDirective } from './directives/panel-host.directive';
import {DragulaModule} from "ng2-dragula";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PiEntryComponent,
    PiSearchComponent,
    PlannedObservingComponent,
    ProjectComponent,
    ProjectInfoComponent,
    ProposalComponent,
    PiSelectComponent,
    RefinePanelComponent,
    ResultsTableComponent,
    SidenavComponent,
    Autofocus,
    ModularPanelComponent,
    SpacialImageComponent,
    FovParametersComponent,
    ImageQueryComponent,
    PanelBodyDirective,
    ModularPanelControllerComponent,
    ModularPanelLoaderComponent,
    PanelHostDirective,
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    FormsModule,
    TreeModule,
    ContextMenuModule,
    HttpModule,
    NgbModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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
