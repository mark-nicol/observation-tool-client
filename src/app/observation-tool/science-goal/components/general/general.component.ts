import {Component, OnInit} from '@angular/core';
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

  constructor(private persistenceService: PersistenceService) {

  }

  ngOnInit() {
  }

}
