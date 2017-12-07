import {ScienceGoalSectionInterface} from './science-goal-section.interface';

/**
 * Interface for a science goal page
 */
export interface ScienceGoalPageInterface {
  /** The title of the page */
  title: string;
  /** The routing path of the page */
  path: string;
  /** The sections to show on the page */
  sections: { [id: string]: ScienceGoalSectionInterface };
}
