import {NgModule} from '@angular/core';
import {NavbarComponent} from './navbar.component';
import {SharedModule} from '../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    // RouterModule,
    NgbModule.forRoot(),
  ],
  declarations: [NavbarComponent],
  providers: [],
  exports: [NavbarComponent]
})

export class NavbarModule {
}
