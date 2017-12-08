import {Component} from '@angular/core';
import {CURRENT_GOAL} from '../../../shared/data/current-science-goal';
import {ImageQueryInterface} from '../../../shared/interfaces/science-goal-interfaces/field-setup-interfaces/image-query.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';

/**
 * Image query component
 *
 * Currently unused
 */

@Component({
  selector: 'image-query',
  templateUrl: './image-query.component.html',
  styleUrls: ['./image-query.component.css']
})
export class ImageQueryComponent {

  data: ImageQueryInterface;

  constructor(private persistenceService: PersistenceService) {}

  ngOnInit() {
    this.persistenceService.getScienceGoalPageSection(CURRENT_GOAL, 'fieldSetup', 'imageQuery')
      .subscribe(res => this.data = res);
  }

}
