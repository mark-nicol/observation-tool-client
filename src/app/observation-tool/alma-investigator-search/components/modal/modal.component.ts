import {Component} from '@angular/core';
import {ComponentModalConfig, ModalSize, SuiModal} from 'ng2-semantic-ui';

interface ModalContext {
  title: string;
  question: string;
}

@Component({
             selector: 'app-modal',
             templateUrl: './modal.component.html',
             styleUrls: ['./modal.component.css']
           })

export class AlmaPrimaryInvestigatorSelectModalComponent {

  constructor(public modal: SuiModal<ModalContext>) {
  }

}

export class AlmaPrimaryInvestigatorSelectModal extends ComponentModalConfig<ModalContext, void, void> {
  constructor(title: string, question: string, size = ModalSize.Large) {
    super(AlmaPrimaryInvestigatorSelectModalComponent, {title, question});
    this.isClosable         = false;
    this.transitionDuration = 200;
    this.size               = size;
    this.isInverted         = true;
  }
}
