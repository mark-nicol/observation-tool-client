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

import {IEntity} from './entity.interface';
import {IEntityRef} from './entity-ref.interface';
import {IObsPlan} from './obs-plan.interface';
import {IDate} from './date.interface';
import {IInvestigator} from './investigator.interface';
import {IProposalFeedback} from './proposal-feedback.interface';
import {IScienceGoal} from './science-goal.interface';

export interface IObsProposal {
  title?: string | null;
  obsProposalEntity: IEntity;
  documentsRef: IEntityRef;
  obsProjectRef: IEntityRef;
  _abstract: string;
  relatedProposals: string;
  previousProposals: string;
  dateReceived: string;
  cycle: string;
  studentProject: boolean;
  continuation: boolean;
  scientificCategoryCode: string;
  proposalTypeCode: string;
  scientificCategoryString: string;
  proposalTypeString: string;
  keyword?: (string)[] | null;
  keywordCode?: (string)[] | null;
  principalInvestigator: IInvestigator;
  coInvestigator?: (IInvestigator)[] | null;
  proposalFeedback: IProposalFeedback;
  schemaVersion: string;
  revision: string;
  almatype: string;
  scienceGoals?: (IScienceGoal)[] | null;
  obsPlan: IObsPlan;
}

