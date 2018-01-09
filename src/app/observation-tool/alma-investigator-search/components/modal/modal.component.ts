import {Component} from '@angular/core';
import {ComponentModalConfig, ModalSize, SuiModal} from 'ng2-semantic-ui';
import {Observable} from 'rxjs/Observable';
import {AlmaInvestigatorInterface} from '../../../shared/interfaces/alma-investigator.interface';
import {AlmaInvestigatorSearchService} from '../../services/alma-investigator-search.service';

interface ModalContext {
  name: string;
  title: string;
  question: string;
}

@Component({
             selector: 'app-modal',
             templateUrl: './modal.component.html',
             styleUrls: ['./modal.component.css'],
             providers: [AlmaInvestigatorSearchService]
           })

export class AlmaInvestigatorSearchModalComponent {

  searchResults: Observable<AlmaInvestigatorInterface[]>;

  constructor(public modal: SuiModal<ModalContext>,
              private almaInvestigatorSearchService: AlmaInvestigatorSearchService) {
    console.log(this.modal.context.name);
    this.searchResults = this.almaInvestigatorSearchService.newSearch('Name', this.modal.context.name);
  }

}

export class AlmaInvestigatorSearchModal extends ComponentModalConfig<ModalContext, void, void> {

  constructor(name?,
              title    = 'Investigator Search',
              question = '',
              size     = ModalSize.Large) {
    super(AlmaInvestigatorSearchModalComponent, {name, title, question});
    this.isClosable         = false;
    this.transitionDuration = 200;
    this.size               = size;
    this.isInverted         = true;
  }
}
