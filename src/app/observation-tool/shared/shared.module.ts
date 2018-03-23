import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UnitsModule} from '../../units/units.module';
import {DegreesPipe} from './pipes/degrees.pipe';
import {SexagesimalPipe} from './pipes/sexagesimal.pipe';
import {PersistenceService} from './services/persistence.service';
import {SuiModule} from 'ng2-semantic-ui';
import {SimbadService} from './services/simbad.service';
import {SystemService} from './services/system.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule,
    SuiModule,
    UnitsModule,
  ],
  declarations: [
    DegreesPipe,
    SexagesimalPipe,
  ],
  providers: [
    PersistenceService,
    SystemService,
    SimbadService
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UnitsModule,
    DegreesPipe,
    SexagesimalPipe,
    SuiModule,
  ]
})

export class SharedModule {
}
