import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component';
import {NavbarModule} from './observation-tool/navbar/navbar.module';
import {ProjectModule} from './observation-tool/project/project.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NavbarModule,
    ProjectModule,
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
