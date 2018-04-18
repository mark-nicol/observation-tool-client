import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {UnitsModule} from '../../units/units.module';
import {DegreesPipe} from './pipes/degrees.pipe';
import {SexagesimalPipe} from './pipes/sexagesimal.pipe';
import {ProjectService} from './services/project.service';
import {SuiModule} from 'ng2-semantic-ui';
import {SimbadService} from './services/simbad.service';
import {SystemService} from './services/system.service';
import {ProjectImportComponent} from './components/project-import/project-import.component';
import { ProjectImportModalComponent } from './components/project-import-modal/project-import-modal.component';
import {StartComponent} from './components/start/start.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SuiModule,
    UnitsModule,
  ],
  declarations: [
    DegreesPipe,
    SexagesimalPipe,
    ProjectImportComponent,
    ProjectImportModalComponent,
    StartComponent
  ],
  providers: [
    ProjectService,
    SystemService,
    SimbadService
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UnitsModule,
    StartComponent,
    DegreesPipe,
    ProjectImportComponent,
    SexagesimalPipe,
    SuiModule,
  ],
  entryComponents: [ProjectImportModalComponent]
})

export class SharedModule {
}
