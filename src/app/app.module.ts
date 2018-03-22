import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
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
