/*
 * ALMA - Atacama Large Millimeter Array
 * Copyright (c) UKATC - UK Astronomy Technology Centre, Science and Technology Facilities Council, 2018
 * (in the framework of the ALMA collaboration).
 * All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307  USA
 */

import {Injectable} from '@angular/core';
import {CoordSystemInterface} from '../interfaces/coord-system.interface';

@Injectable()
export class SystemService {

  private systems: { [id: string]: CoordSystemInterface } = {
    'ICRS': {
      sexagesimalLabels: {
        latLabel: 'Dec',
        lonLabel: 'RA',
      },
      normalLabels: {
        latLabel: 'Dec (deg)',
        lonLabel: 'RA (deg)',
      },
      latPlaceholder: '0',
      lonPlaceholder: '0',
      lonHeader: 'RA',
      latHeader: 'Dec'
    },
    'J2000': {
      sexagesimalLabels: {
        latLabel: 'Dec',
        lonLabel: 'RA',
      },
      normalLabels: {
        latLabel: 'Dec (deg)',
        lonLabel: 'RA (deg)'
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
        latLabel: 'Lat (deg)',
        lonLabel: 'Lon (deg)',
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
        latLabel: 'Alt (deg)',
        lonLabel: 'Az (deg)',
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
        latLabel: 'Alt (deg)',
        lonLabel: 'Az (deg)',
      },
      latPlaceholder: '0',
      lonPlaceholder: '0',
      lonHeader: 'RA',
      latHeader: 'Deg'
    }
  };

  constructor() {
  }

  getSystem(key: string): CoordSystemInterface {
    return this.systems[key];
  }

  getSystems(): string[] {
    return Object.keys(this.systems);
  }

}
