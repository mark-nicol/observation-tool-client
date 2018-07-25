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

import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import 'rxjs/add/operator/debounce';
import {Speed} from '../../../../units/classes/speed';
import {CoordSystemInterface} from '../../../shared/interfaces/coord-system.interface';
import {SimbadService} from '../../../shared/services/simbad.service';
import {SystemService} from '../../../shared/services/system.service';
import {ITargetParameters} from '../../../shared/interfaces/apdm/target-parameters.interface';

/**
 * Source Component in Field Setup
 *
 * Allows for selecting a sky source
 */

@Component({
  selector: 'field-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SourceComponent implements OnInit {

  @Input() form: FormGroup;
  @Output() resolveEmitter = new EventEmitter<number[]>();

  currentTarget               = 0;
  target: ITargetParameters;
  /** Selectable solar system bodies for selection box */
  solarBodies                 = [
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
  currentSystem: CoordSystemInterface;
  sexagesimalCheckboxDisabled = false;

  static getRedshift(centerVelocity: Speed, dopplerType: string): number {
    const voc = centerVelocity.getValueInUnits('m/s') / Speed.C;
    switch (dopplerType) {
      case 'RELATIVISTIC':
        return Math.sqrt((1.0 + voc) / (1.0 - voc)) - 1;
      case 'OPTICAL':
        return voc;
      case 'RADIO':
        return voc / (1.0 - voc);
    }
  }

  /**
   * Retrieves data from service
   * @param systemService
   * @param simbadService
   */
  constructor(protected systemService: SystemService,
              private simbadService: SimbadService) {
  }


  ngOnInit() {
    this.systemChange();
  }

  /**
   * Handles a change of system in the system selector
   * @param system The new system type to be used
   */
  systemChange() {
    this.currentSystem = this.systemService.getSystem(this.form.value.sourceCoordinates.system);
    if (this.form.value.sourceCoordinates.system === 'ICRS' ||
        this.form.value.sourceCoordinates.system === 'FK5 J2000') {
      this.sexagesimalCheckboxDisabled = false;
    } else {
      this.form.value.sourceCoordinates.type = 'RELATIVE';
      this.sexagesimalCheckboxDisabled       = true;
    }
  }

  setRedshift() {
    this.form.patchValue({
      prj_sourceVelocity: {
        redshift: SourceComponent.getRedshift(Object.assign(new Speed,
          this.form.value.sourceVelocity.centerVelocity.content),
          this.form.value.sourceVelocity.dopplerCalcType)
      }
    });
  }

  resolveSource() {
    this.simbadService.queryByIdentifier(this.form.value.sourceName).subscribe(
      result => {
        const data = SimbadService.cleanResponse(result);
        this.form.patchValue(data);
        this.resolveEmitter.emit([
          data.sourceCoordinates.longitude.content,
          data.sourceCoordinates.latitude.content
        ]);
      },
      error => console.log('error')
    );
  }


  get sourceName() {
    return this.form.get('sourceName')
  }

}
