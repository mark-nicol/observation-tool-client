import {Component} from '@angular/core';
import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import {SuiPopupConfig} from 'ng2-semantic-ui';

/**
 * The main app component
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbTooltipConfig]
})

export class AppComponent {

  /** The title of the app */
  title = 'app';

  /**
   * Creates a new app component
   *
   * Sets all tooltip triggers to manual allowing a delay
   *
   * @param {NgbTooltipConfig} config The tooltip config injection
   */
  constructor(config: SuiPopupConfig) {
    config.delay = 1000;
  }
}
