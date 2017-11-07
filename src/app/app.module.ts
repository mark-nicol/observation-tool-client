import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component';
import {NavbarModule} from './observation-tool/navbar/navbar.module';
import {ProjectModule} from './observation-tool/project/project.module';

@NgModule({
  imports: [
    NavbarModule,
    ProjectModule,
    NgbModule.forRoot(),
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
