import {Component} from '@angular/core';
import {NgbTooltipConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbTooltipConfig]
})
export class AppComponent {
  title = 'app';

  constructor(config: NgbTooltipConfig) {
    config.triggers = 'manual';
  }
}
