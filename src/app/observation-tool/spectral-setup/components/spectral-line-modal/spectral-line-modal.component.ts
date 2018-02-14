import {Component} from '@angular/core';
import {ComponentModalConfig, ModalSize, SuiModal} from 'ng2-semantic-ui';

interface ModalContext {
  name: string;
  title: string;
}

@Component({
  selector: 'app-spectral-line-modal',
  templateUrl: './spectral-line-modal.component.html',
  styleUrls: ['./spectral-line-modal.component.scss']
})
export class SpectralLineModalComponent {

  constructor(public modal: SuiModal<ModalContext>) { }

}

export class SpectralLineSearchModal extends ComponentModalConfig<ModalContext, void, void> {
  constructor(name?,
              title = 'Spectral line search',
              size = ModalSize.Large) {
    super(SpectralLineModalComponent, {name, title});
    this.size = size;
  }
}
