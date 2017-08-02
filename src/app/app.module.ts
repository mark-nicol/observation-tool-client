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
import { SidenavContextMenuComponent } from './components/sidenav/sidenav-context-menu/sidenav-context-menu/sidenav-context-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PiEntryComponent,
    PiSearchComponent,
    ProjectInfoComponent,
    PiSelectComponent,
    RefinePanelComponent,
    ResultsTableComponent,
    SidenavComponent,
    SidenavContextMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TreeModule,
    ContextMenuModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  providers: [
    PrimaryInvestigatorService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [NavbarComponent]
})
export class AppModule { }
