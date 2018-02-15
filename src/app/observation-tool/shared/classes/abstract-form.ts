import {FormGroup} from '@angular/forms';
import 'rxjs/add/operator/debounce';
import {Observable} from 'rxjs/Rx';

export abstract class AbstractForm {

  form: FormGroup;
  data: any;

  constructor(/*protected formBuilder: FormBuilder*/) {
  }

  onFormChanges() {
    this.form.valueChanges.debounce(() => Observable.interval(1500)).subscribe(value => {
      if (this.form.valid && this.form.dirty) {
        console.log('Changes');
        console.log(value);
        Object.assign(value, this.data);
      }
    });
  };
}
