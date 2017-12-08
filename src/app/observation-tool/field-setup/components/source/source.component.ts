import {Component} from '@angular/core';
import {CoordSystemInterface} from '../../../shared/interfaces/coord-system.interface';
import {SourceInterface} from '../../../shared/interfaces/science-goal-interfaces/field-setup-interfaces/source.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';

/**
 * Source Component in Field Setup
 *
 * Allows for selecting a sky source
 */

@Component({
  selector: 'field-source',
  host: {'(document:click)': 'unfocus($event)'}, // TODO fix host binding
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent {

  /** ScienceGoalPageInterface data loaded from Field Setup Service */
  pageData: SourceInterface;

  /** Selectable solar system bodies for selection box */
  solarBodies = [
    'Mercury',
    'Venus',
    'Moon',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
    'Pluto',
    'Sun',
    'Ganymede',
    'Europa',
    'Callisto',
    'Io',
    'Titan',
    'Ceres',
    'Pallas',
    'Juno',
    'Vesta',
    'Ephemeris'
  ];

  /**
   * Retrieves data from service
   * @param persistenceService Injected service
   */
  constructor(private persistenceService: PersistenceService) {
    this.pageData = null;
    // persistenceService.getPanelData('field-setup', 'field-source').subscribe(data => this.pageData = data);
  }

  /**
   * Removes focus from the currently focused DOM element when clicked out
   */
  unfocus(event: Event) {
    const active = document.activeElement;
    try {
      if (active !== event.target)
        (active as HTMLElement).blur();
    } catch (TypeError) {
    }
  }

  /**
   * Changes use of a solar system object, hides most of the component from use
   */
  solarCheckboxClicked() {
    this.pageData.solarSystemObject = !this.pageData.solarSystemObject;
  }

  /**
   * Sets the lat and lon page values from input boxes
   * @param value   The value to set lat/lon to
   * @param element The id of element initiating the change
   */
  setLatLon(value: number, element: Element) {
    if (element.id === 'latInput') {
      this.pageData.lat.value = value;
    } else {
      this.pageData.lon.value = value;
    }
  }

  /**
   * Controls a change of target type
   * @param targetType The new target type to be set
   */
  targetChange(targetType: string) {
    this.pageData.targetType = targetType;
  }

  /**
   * Handles a change of the sexagesimal checkbox in the system selector
   * @param units True if checkbox is selected
   */
  sexagesimalChange(units: boolean) {
    this.pageData.sexagesimalUnits = units;
  }

  /**
   * Handles a change of system in the system selector
   * @param system The new system type to be used
   */
  systemChange(system: string) {
    this.pageData.chosenSystem = system;
  }

}
