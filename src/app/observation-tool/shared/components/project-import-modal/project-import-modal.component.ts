import {Component} from '@angular/core';
import {ComponentModalConfig, ModalSize, SuiModal} from 'ng2-semantic-ui';
import {ObsProject} from '../../classes/obsproject';

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

  selectedProject: ObsProject;

  constructor(public modal: SuiModal<ModalContext>) { }

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
  }

}
