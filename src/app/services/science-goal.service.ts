import {Injectable} from "@angular/core";
import {ScienceGoalItem} from "../components/science-goal-components/science-goal-item";
import {FieldSetupComponent} from "../components/science-goal-components/field-setup.component";

@Injectable()
export class ScienceGoalService {

  scienceGoals: ScienceGoalItem[] = [
    new ScienceGoalItem(FieldSetupComponent,
      {
        title: 'Field Setup',
        body: 'Science Goal 1'
      }
    ),
    new ScienceGoalItem(FieldSetupComponent,
      {
        title: 'Field Setup',
        body: 'Science Goal 2'
      }
    ),
  ];

  getScienceGoals() {
    return this.scienceGoals;
  }

  addScienceGoal(component: any, data: Object) {
    console.log('MORE SCIENCE!');
    this.scienceGoals.push(new ScienceGoalItem(component, data));
  }

}
