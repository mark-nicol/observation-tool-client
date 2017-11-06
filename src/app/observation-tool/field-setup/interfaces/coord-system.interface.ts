/**
 * Interface for a coordinates system supplying labels and placeholders to the UI
 */
export interface CoordSystem {
  /** Labels for lat long input boxes if sexagesimal checkbox is checked */
  sexagesimalLabels: {
    latLabel: string,
    lonLabel: string
  },
  /** Labels for lat long input boxes if sexagesimal checkbox is unchecked */
  normalLabels: {
    latLabel: string,
    lonLabel: string
  },
  /** Latitude placeholder */
  latPlaceholder: string,
  /** Longitude placeholder */
  lonPlaceholder: string,
  /** Longitude table header in field centre coordinates input component */
  lonHeader: string,
  /** Latitude table header in field centre coordinates input component */
  latHeader: string
}
