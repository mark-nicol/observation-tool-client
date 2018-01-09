import {Component} from '@angular/core';
import {ComponentModalConfig, ModalSize, SuiModal} from 'ng2-semantic-ui';
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

  searchResults: AlmaInvestigatorInterface[];
  isSearching = false;

  constructor(public modal: SuiModal<ModalContext>,
              private almaInvestigatorSearchService: AlmaInvestigatorSearchService) {
    this.isSearching = true;
    this.almaInvestigatorSearchService.search('Name', this.modal.context.name)
        .subscribe(
          results => this.searchResults = results,
          () => {
          },
          () => this.isSearching = false);
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
    this.mustScroll         = true;
  }
}
