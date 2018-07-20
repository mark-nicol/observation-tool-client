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
