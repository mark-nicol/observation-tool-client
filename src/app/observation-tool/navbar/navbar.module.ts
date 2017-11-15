import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';
import {NavbarComponent} from './navbar.component';

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
