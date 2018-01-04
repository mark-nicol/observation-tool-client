import {Component} from '@angular/core';

/**
 * The control and performance component
 *
 * TODO Implement
 */

@Component({
             selector: 'app-control-performance',
             templateUrl: './control-performance.component.html',
             styleUrls: ['./control-performance.component.scss']
           })
export class ControlPerformanceComponent {
  chosenRadio         = 'single';
  angularResUnits     = 'arcsec';
  overrideSensitivity = false;
  timeConstrained     = false;
}
