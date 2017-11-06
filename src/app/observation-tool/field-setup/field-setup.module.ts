import {NgModule} from '@angular/core';
import {FieldSetupComponent} from './components/field-setup/field-setup.component';
import {FieldSetupService} from '../services/field-setup.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [FieldSetupService],
  exports: [FieldSetupComponent]
})

export class FieldSetupModule { }
