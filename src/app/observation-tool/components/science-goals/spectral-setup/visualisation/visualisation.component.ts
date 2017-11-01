import {Component} from '@angular/core';

/**
 * Spectral visualisation component
 *
 * Currently inactive
 */

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.scss']
})
export class VisualisationComponent {

  /** Values for the column density selector */
  columnDensityChoices = [
    '0.472mm (1st Octile)',
    '0.658mm (2nd Octile)',
    '0.913mm (3rd Octile)',
    '1.262mm (4th Octile)',
    '1.796mm (5th Octile)',
    '2.748mm (6th Octile)',
    '5.186mm (7th Octile)',
  ];

}
