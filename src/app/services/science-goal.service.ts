import {Injectable} from "@angular/core";
import {ScienceGoalItem} from "../components/science-goal-item";
import {FieldSetupComponent} from "../components/field-setup.component";

@Injectable()
export class ScienceGoalService {
  getScienceGoals() {
    return [
      new ScienceGoalItem(FieldSetupComponent, {title: 'Field Setup', body: 'test test test'})
    ]
  }
}
