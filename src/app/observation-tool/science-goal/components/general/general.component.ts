import {Component, OnInit} from '@angular/core';
import {ScienceGoalGeneralInterface} from '../../../shared/interfaces/science-goal-interfaces/general.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';

/**
 * General science goal page component
 *
 * Currently inactive
 */

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})

export class GeneralComponent implements OnInit {

  data: ScienceGoalGeneralInterface;

  constructor(private persistenceService: PersistenceService) {

  }

  ngOnInit() {
    this.persistenceService.getScienceGoalPage(0, 'general').subscribe(res => this.data = res);
  }

}
