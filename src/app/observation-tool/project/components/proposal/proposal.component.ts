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

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {ProjectService} from '../../../shared/services/project.service';
import {IInvestigator} from '../../../shared/interfaces/apdm/investigator.interface';
import {IObsProposal} from '../../../shared/interfaces/apdm/obs-proposal.interface';

/**
 * The proposalForm component
 */

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})

export class ProposalComponent implements OnInit {

  proposalForm: FormGroup = this.formBuilder.group({
    title: [{value: '', disabled: true}],
    cycle: '',
    abstract: '',
    relatedProposals: '',
    previousProposals: '',
    studentProject: false,
    proposalTypeString: '',
    scientificCategoryString: '',
    duplicateObservationsJustification: '',
    keyword: [],
    coInvestigator: []
  });

  proposal: Observable<IObsProposal>;

  /** The currently selected proposalForm type */
  chosenType = 'regularRadio';

  /** The available proposalForm types for looping over */
  typeRadios = [
    {
      id: 'Regular',
      text: 'Regular'
    },
    {
      id: 'Target Of Opportunity',
      text: 'Target Of Opportunity'
    },
    {
      id: 'VLBI',
      text: 'VLBI'
    },
    {
      id: 'Large Program',
      text: 'Large Program'
    },
  ];

  /** The currently chosen scientific category radio */
  chosenCategory = 'cosmology';
  /** Keys to loop the radios object */
  categoryKeys = Object.keys;
  /** The available categories with values and keywords */
  categoryRadios: { [id: string]: any } = {
    'Cosmology and the High Redshift Universe': {
      text: 'Cosmology and the High Redshift Universe',
      value: 'Cosmology and the High Redshift Universe',
      keywords: [
        'Lyman Alpha Emitters/Blobs (LAE/LAB)',
        'Lyman Break Galaxies (LBG)',
        'Starburst galaxies',
        'Sub-mm Galaxies (SMG)',
        'High-z Active Galactic Nuclei (AGN)',
        'Gravitational lenses',
        'Damped Lyman Alpha (DLA) systems',
        'Cosmic Microwave Background (CMB)/Sunyaev-Zel\'dovich Effect (SZE)',
        'Galaxy structure & evolution',
        'Gamma Ray Bursts (GRB)',
        'Galaxy Clusters',
      ]
    },
    'Galaxies and Galactic Nuclei': {
      text: 'Galaxies and Galactic Nuclei',
      value: 'Galaxies and Galactic Nuclei',
      keywords: [
        'Starbursts, star formation',
        'Active Galactic Nuclei (AGN)/Quasars (QSO)',
        'Spiral galaxies',
        'Merging and interacting galaxies',
        'Surveys of galaxies',
        'Outflows, jets, feedback',
        'Early-type galaxies',
        'Galaxy groups and clusters',
        'Galaxy chemistry',
        'Galactic centres/nuclei',
        'Dwarf/metal-poor galaxies',
        'Luminous and Ultra-Luminous Infra-Red Galaxies (LIRG &amp; ULIRG)',
        'Giant Molecular Clouds (GMC) properties',
      ]
    },
    'ISM, star formation and astrochemistry': {
      text: 'ISM, star formation and astrochemistry',
      value: 'ISM, star formation and astrochemistry',
      keywords: [
        'Outflows, jets and ionized winds',
        'High-mass star formation',
        'Intermediate-mass star formation',
        'Low-mass star formation',
        'Pre-stellar cores, Infra-Red Dark Clouds (IRDC)',
        'Astrochemistry',
        'Inter-Stellar Medium (ISM)/Molecular clouds',
        'Photon-Dominated Regions (PDR)/X-Ray Dominated Regions (XDR)',
        'HII regions',
        'Magellanic Clouds',
      ]
    },
    'Circumstellar disks, exoplanets and the solar system': {
      text: 'Circumstellar disks, exoplanets and the solar system',
      value: 'Circumstellar disks, exoplanets and the solar system',
      keywords: [
        'Debris disks',
        'Disks around low-mass stars',
        'Disks around high-mass stars',
        'Exo-planets',
        'Solar system - Comets',
        'Solar system - Planetary atmospheres',
        'Solar system - Planetary surfaces',
        'Solar system - Trans-Neptunian Objects (TNOs)',
        'Solar system - Asteroids',
      ]
    },
    'Stellar Evolution and the Sun': {
      text: 'Stellar Evolution and the Sun',
      value: 'Stellar Evolution and the Sun',
      keywords: [
        'The Sun',
        'Main sequence stars',
        'Asymptotic Giant Branch (AGB) stars',
        'Post-AGB stars',
        'Hypergiants',
        'Evolved stars - Shaping/physical structure',
        'Evolved stars - Chemistry',
        'Cataclysmic stars',
        'Luminous Blue Variables (LBV)',
        'White dwarfs',
        'Brown dwarfs',
        'Supernovae (SN) ejecta',
        'Pulsars and neutron stars',
        'Black holes',
        'Transients',
      ]
    }
  };

  constructor(private projectService: ProjectService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.projectService.loadedProposal.subscribe((result: IObsProposal) => {
      this.proposalForm.patchValue(result);
      this.proposalForm.controls['title'].enable();
    });
    this.observeFormChanges();
  }

  get pi(): IInvestigator {
    return this.projectService.loadedProposal.getValue().principalInvestigator;
  }

  observeFormChanges() {
    const debounce = this.proposalForm.valueChanges.debounce(() => Observable.interval(1500));
    debounce.subscribe((value: IObsProposal) => {
      if (this.proposalForm.valid && this.proposalForm.dirty) {
        this.projectService.updateProposal(value);
        this.proposalForm.controls['title'].disable();
        this.proposalForm.markAsPristine();
      }
    });
  }

}
