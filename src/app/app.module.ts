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
/* Services */
import {PiSelectionModule} from './observation-tool/pi-selection/pi-selection.module';
import {SharedModule} from './observation-tool/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [],

})
export class AppModule {
}
