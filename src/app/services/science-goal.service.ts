import {Injectable} from "@angular/core";
import {ScienceGoalItem} from "../components/science-goal-components/science-goal-item";
import {FieldSetupComponent} from "../components/science-goal-components/field-setup.component";

@Injectable()
export class ScienceGoalService {
  static getScienceGoals() {
    return [
      new ScienceGoalItem(FieldSetupComponent, {title: 'Field Setup', body: 'test test test'})
    ]
  }
}
