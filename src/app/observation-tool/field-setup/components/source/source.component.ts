import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CURRENT_PROJECT} from '../../../shared/data/current-project';
import {CURRENT_SCIENCE_GOAL} from '../../../shared/data/current-science-goal';
import {CURRENT_SOURCE} from '../../../shared/data/current-source';
import {CoordSystemInterface} from '../../../shared/interfaces/coord-system.interface';
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
export class SourceComponent implements OnInit {

  sourceForm: FormGroup;

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

  /** Iterator for the systems */
  systemKeys: (o) => string[] = Object.keys;

  /** Possible system choices dict */
  systems: { [id: string]: CoordSystemInterface } = {
    'icrs': {
      sexagesimalLabels: {
        latLabel: 'Dec',
        lonLabel: 'RA',
      },
      normalLabels: {
        latLabel: 'Dec(deg)',
        lonLabel: 'RA(deg)',
      },
      latPlaceholder: '0',
      lonPlaceholder: '0',
      lonHeader: 'RA',
      latHeader: 'Dec'
    },
    'FK5 J2000': {
      sexagesimalLabels: {
        latLabel: 'Dec',
        lonLabel: 'RA',
      },
      normalLabels: {
        latLabel: 'Dec(deg)',
        lonLabel: 'RA(deg)'
      },
      latPlaceholder: '0',
      lonPlaceholder: '0',
      lonHeader: 'RA',
      latHeader: 'Dec'
    },
    'galactic': {
      sexagesimalLabels: {
        latLabel: '',
        lonLabel: '',
      },
      normalLabels: {
        latLabel: 'Lat(deg)',
        lonLabel: 'Lon(deg)',
      },
      latPlaceholder: '-60.18855219',
      lonPlaceholder: '96.33728304',
      lonHeader: 'Lon',
      latHeader: 'Lat',
    },
    'eliptic': {
      sexagesimalLabels: {
        latLabel: '',
        lonLabel: '',
      },
      normalLabels: {
        latLabel: 'Lat (deg)',
        lonLabel: 'Lon (deg)',
      },
      latPlaceholder: '0',
      lonPlaceholder: '0',
      lonHeader: 'RA',
      latHeader: 'Deg'
    },
    'horizon': {
      sexagesimalLabels: {
        latLabel: '',
        lonLabel: '',
      },
      normalLabels: {
        latLabel: 'Alt(deg)',
        lonLabel: 'Az(deg)',
      },
      latPlaceholder: '0',
      lonPlaceholder: '0',
      lonHeader: 'RA',
      latHeader: 'Deg'
    },
    'azel': {
      sexagesimalLabels: {
        latLabel: '',
        lonLabel: '',
      },
      normalLabels: {
        latLabel: 'Alt(deg)',
        lonLabel: 'Az(deg)',
      },
      latPlaceholder: '0',
      lonPlaceholder: '0',
      lonHeader: 'RA',
      latHeader: 'Deg'
    }
  };

  /**
   * Retrieves data from service
   * @param persistenceService Injected service
   * @param formBuilder
   */
  constructor(private persistenceService: PersistenceService, private formBuilder: FormBuilder) {
    this.sourceForm = this.formBuilder.group({
                                               sourceName: '',
                                               solarSystemObject: false,
                                               chosenSolarObject: '',
                                               targetType: '',
                                               radialVelocityReferenceFrame: '',
                                               dopplerType: '',
                                               sexagesimalUnits: true,
                                               redshift: 0,
                                               chosenSystem: ''
                                             })
  }

  ngOnInit() {
    this.persistenceService.getSource(CURRENT_PROJECT, CURRENT_SCIENCE_GOAL, CURRENT_SOURCE)
        .subscribe(result => {
          this.sourceForm.patchValue(result);
        });
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
  }

  /**
   * Sets the lat and lon page values from input boxes
   * @param value   The value to set lat/lon to
   * @param element The id of element initiating the change
   */
  setLatLon(value: number, element: Element) {
    if (element.id === 'latInput') {
    } else {
    }
  }

  /**
   * Controls a change of target type
   * @param targetType The new target type to be set
   */
  targetChange(targetType: string) {
  }

  /**
   * Handles a change of the sexagesimal checkbox in the system selector
   * @param units True if checkbox is selected
   */
  sexagesimalChange(units: boolean) {
  }

  /**
   * Handles a change of system in the system selector
   * @param system The new system type to be used
   */
  systemChange(system: CoordSystemInterface) {
  }

}
