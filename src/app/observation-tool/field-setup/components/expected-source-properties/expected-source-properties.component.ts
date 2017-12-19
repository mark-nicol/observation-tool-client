import {Component, OnInit} from '@angular/core';
import {CURRENT_GOAL} from '../../../shared/data/current-goal';
import {ExpectedSourcePropertiesInterface} from '../../../shared/interfaces/science-goal-interfaces/field-setup-interfaces/expected-source-properties.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';

/**
 * Source Expected properties component
 */

@Component({
  selector: 'source-expected-properties',
  templateUrl: './expected-source-properties.component.html',
  styleUrls: ['./expected-source-properties.component.css']
})
export class ExpectedSourcePropertiesComponent implements OnInit{

  data: ExpectedSourcePropertiesInterface;

  constructor(private persistenceService: PersistenceService) {

  }

  ngOnInit() {
    // this.persistenceService.getSource(CURRENT_GOAL, 0)
    //   .subscribe(res => this.data = res.expectedSourceProperties);
  }

}
