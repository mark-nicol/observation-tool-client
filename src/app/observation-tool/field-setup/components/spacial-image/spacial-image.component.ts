import {Component, OnInit} from '@angular/core';
import {PersistenceService} from '../../../shared/services/persistence.service';

/**
 * Spacial image component
 *
 * Currently inactive
 */

@Component({
             selector: 'spacial-image',
             templateUrl: './spacial-image.component.html',
             styleUrls: ['./spacial-image.component.css']
           })
export class SpacialImageComponent implements OnInit {

  data: any;

  constructor(private persistenceService: PersistenceService) {

  }

  ngOnInit() {
    // this.persistenceService.getScienceGoalPageSection(CURRENT_GOAL, 'fieldSetup', 'spatialImage')
    //   .subscribe(res => this.data = res);
  }

}
