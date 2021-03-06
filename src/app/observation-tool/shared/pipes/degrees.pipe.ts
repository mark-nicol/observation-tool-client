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

import {Pipe, PipeTransform} from '@angular/core';
import * as eq from 'equatorial';

/**
 * Pipe to convert values to degrees
 *
 * Currently sets content to 8 decimal places
 */

@Pipe({
        name: 'degrees'
      })
export class DegreesPipe implements PipeTransform {

  /**
   * Transforms the content
   * @param value The content to transform
   * @param type
   */
  transform(value: any, type: string): any {
    if (value) {
      if (type === 'dec') {
        return eq.decHms2Deg(value);
      } else if (type === 'ra') {
        return eq.raHms2Deg(value);
      }
    }
  }

}
