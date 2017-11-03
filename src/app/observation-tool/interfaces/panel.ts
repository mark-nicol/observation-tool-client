/**
 * Interface for a modular panel on a science goal page
 */
export interface Panel {
  /** The title to show in the panel */
  title: string;
  /** Whether the panel is displayed or not */
  shown: boolean;
}
