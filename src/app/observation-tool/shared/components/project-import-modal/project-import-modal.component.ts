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

import {Component} from '@angular/core';
import {ComponentModalConfig, ModalResult, ModalSize, SuiModal} from 'ng2-semantic-ui';
import {IObsProject} from '../../interfaces/apdm/obs-project.interface';
import {ProjectService} from '../../services/project.service';

interface ModalContext {
  name: string;
  title: string;
}

@Component({
  selector: 'app-project-import-modal',
  templateUrl: './project-import-modal.component.html',
  styleUrls: ['./project-import-modal.component.css']
})

export class ProjectImportModalComponent {

  constructor(public modal: SuiModal<ModalContext>) { }

  approve() {
    this.modal.approve(undefined);
  }

  deny() {
    this.modal.deny(undefined)
  }

}

export class ProjectImportModal extends ComponentModalConfig<ModalContext, void, void> {

  constructor(name?,
              title = 'Project Search',
              size = ModalSize.Large) {
    super(ProjectImportModalComponent, {name, title});
    this.transitionDuration = 200;
    this.size = size;
    this.mustScroll = true;
    this.isClosable = true;
    this.isFullScreen = true;
  }

}
