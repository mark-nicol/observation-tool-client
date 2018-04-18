import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../shared/services/project.service';

/**
 * FOV Parameters component
 *
 * Currently unused
 */

@Component({
  selector: 'fov-parameters',
  templateUrl: './fov-parameters.component.html',
  styleUrls: ['./fov-parameters.component.css']
})
export class FovParametersComponent implements OnInit {

  data: any;

  constructor(private persistenceService: ProjectService) {

  }

  ngOnInit() {
    // this.persistenceService.getScienceGoalPageSection(CURRENT_GOAL, 'fieldSetup', 'fovParameters')
    //   .subscribe(res => this.data = res);
  }

}
