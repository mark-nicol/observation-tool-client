import {Component, OnInit} from '@angular/core';
import {CURRENT_GOAL} from '../../../shared/data/current-goal';
import {FovParametersInterface} from '../../../shared/interfaces/science-goal-interfaces/field-setup-interfaces/fov-parameters.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';

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

  data: FovParametersInterface;

  constructor(private persistenceService: PersistenceService) {

  }

  ngOnInit() {
    // this.persistenceService.getScienceGoalPageSection(CURRENT_GOAL, 'fieldSetup', 'fovParameters')
    //   .subscribe(res => this.data = res);
  }

}
