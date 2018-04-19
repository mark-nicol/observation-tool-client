import {Component, ViewContainerRef} from '@angular/core';
import {SuiPopupConfig} from 'ng2-semantic-ui';
import {ToastsManager} from 'ng2-toastr';

/**
 * The main app component
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  /** The title of the app */
  title = 'app';

  constructor(config: SuiPopupConfig, toastr: ToastsManager, vRef: ViewContainerRef) {
    config.delay = 1000;
    toastr.setRootViewContainerRef(vRef);
  }
}
