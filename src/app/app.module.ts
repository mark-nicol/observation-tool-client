import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component';
import {NavbarModule} from './observation-tool/navbar/navbar.module';
import {ProjectModule} from './observation-tool/project/project.module';
import {SharedModule} from './observation-tool/shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    NavbarModule,
    ProjectModule,
    NgbModule.forRoot(),
    SharedModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
