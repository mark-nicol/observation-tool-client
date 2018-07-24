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

/**
 * Interface for a coordinates system supplying labels and placeholders to the UI
 */
export interface CoordSystemInterface {
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
