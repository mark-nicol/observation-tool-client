/*
 * ALMA - Atacama Large Millimeter Array
 * Copyright (c) UKATC - UK Astronomy Technology Centre, Science and Technology Facilities Council, 2018
 * (in the framework of the ALMA collaboration).
 * All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307  USA
 */

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Observable} from 'rxjs/Observable';
import {IObsProject} from '../../interfaces/apdm/obs-project.interface';
import {IProjectListItem} from '../../interfaces/project-list-item.interface';

@Component({
  selector: 'app-project-import',
  templateUrl: './project-import.component.html',
  styleUrls: ['./project-import.component.css']
})
export class ProjectImportComponent implements OnInit {

  projects: Observable<IProjectListItem[]>;
  _selectedProject: IProjectListItem;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getAllProjects();
  }

  rowClicked(event: IProjectListItem) {
    this._selectedProject = event;
    this.projectService.selectedProject = event;
  }

}
