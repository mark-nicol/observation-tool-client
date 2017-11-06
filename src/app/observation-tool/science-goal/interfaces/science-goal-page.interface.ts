import {ScienceGoalPanel} from './science-goal-panel.interface';

/**
 * Interface for a science goal page
 */
export interface ScienceGoalPage {
  /** The title of the page */
  title: string;
  /** The routing path of the page */
  path: string;
  /** The panels to show on the page */
  panels: { [id: string]: ScienceGoalPanel };
}
