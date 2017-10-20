import {Page} from './page';
import {ScienceGoalPanelService} from '../services/science-goal-panel.service';

export abstract class ScienceGoalPage {

  id: string;
  page: Page;

  constructor(private scienceGoalPanelService: ScienceGoalPanelService, id?: string) {
    this.id = id;
    this.scienceGoalPanelService.getPage(this.id).subscribe(data => this.page = data);
  }

  hiddenChange(event) {
    this.scienceGoalPanelService.hiddenChange(this.id, event);
  }

}
