import {Component} from '@angular/core';
import {SuiPopupConfig} from 'ng2-semantic-ui';

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

  constructor(config: SuiPopupConfig) {
    config.delay = 1000;
  }
}
