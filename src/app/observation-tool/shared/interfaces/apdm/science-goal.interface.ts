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

import {Time} from '../../../../units/classes/time';
import {
  ITechnicalJustification
} from './technical-justification.interface';
import {ICalibrationSetupParameters} from './calibration-setup-parameters.interface';
import {IPerformanceParameters} from './performance-parameters.interface';
import {ISpectralSetupParameters} from './spectral-setup-parameters.interface';
import {ITargetParameters} from './target-parameters.interface';

export interface IScienceGoal {
  estimatedTotalTime: Time;
  userPriority: number;
  requiredReceiverBands?: (string)[] | null;
  estimated12MTime: Time;
  estimated7MTime: Time;
  estimatedTPTime: Time;
  estimatedACATime: Time;
  isDescoped: boolean;
  calibrationSetupParameters: ICalibrationSetupParameters;
  performanceParameters: IPerformanceParameters;
  spectralSetupParameters: ISpectralSetupParameters;
  targetParameters?: (ITargetParameters)[] | null;
  technicalJustification?: (ITechnicalJustification)[] | null;
  mode: string;
  name: string;
  note: string;
}
