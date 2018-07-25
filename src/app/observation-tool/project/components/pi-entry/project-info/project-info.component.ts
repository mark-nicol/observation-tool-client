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

import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ProjectService} from '../../../../shared/services/project.service';
import {ToastsManager} from 'ng2-toastr';
import {IObsProject} from '../../../../shared/interfaces/apdm/obs-project.interface';

/**
 * Project info component
 */

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  project: IObsProject;

  constructor(private persistenceService: ProjectService,
              viewContainerRef: ViewContainerRef,
              private toastsManager: ToastsManager) {
    this.toastsManager.setRootViewContainerRef(viewContainerRef);
  }

  ngOnInit(): void {
    this.persistenceService.loadedProject.subscribe(
      result => this.project = result,
      error => this.toastsManager.error('Could not retrieve project data', 'Error', {showCloseButton: true})
    );
  }

}
