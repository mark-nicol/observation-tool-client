import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../shared/services/project.service';

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
export class ImageQueryComponent implements OnInit{

  data: any;

  constructor(private persistenceService: ProjectService) {}

  ngOnInit() {
    // this.persistenceService.getScienceGoalPageSection(CURRENT_GOAL, 'fieldSetup', 'imageQuery')
    //   .subscribe(res => this.data = res);
  }

}
