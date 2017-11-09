import {Component} from '@angular/core';

/**
 * The proposal component
 *
 * TODO Implement
 */

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})

export class ProposalComponent {

  chosenType = 'regularRadio';
  typeRadios = [
    {
      id: 'regularRadio',
      text: 'Regular'
    },
    {
      id: 'opportunityRadio',
      text: 'Target of Opportunit'
    },
    {
      id: 'vlbiRadio',
      text: 'VLBI'
    },
    {
      id: 'largeRadio',
      text: 'Large Program'
    },
  ];

  chosenCategory = 'cosmology';
  categoryKeys = Object.keys;
  categoryRadios: { [id: string]: any } = {
    'cosmology': {
      id: 'cosmologyRadio',
      text: 'Cosmology and the High Redshift Universe',
      value: 'cosmology',
      keywords: [
        'Lyman Alpha Emitters/Blobs (LAE/LAB)',
        'Lyman Break Galaxies (LBG)',
        'Starburst Galaxies',
        'Sub-mm Galaxies (SMG)',
        'High-z Active Galactic Nuclei (AGN)',
        'Gravitational Lenses',
        'Damped Lyman Alpha (DLA) systems',
        'Cosmic Microwave Background (CMB)/Sunyaev-Zel\'dovich Effect (SZE)',
        'Galaxy Structure and Evolution',
        'Gamma Ray Bursts (GRB)',
        'Galaxy Clusters'
      ]
    },
    'galaxies': {
      id: 'galaxiesRadio',
      text: 'Galaxies and the Galactic Nuclei',
      value: 'galaxies',
      keywords: [
        'Starbursts, Star Formation',
        'Active Galactic Nuclei (AGN)/Quasars (QSO)',
        'Spiral Galaxies',
        'Merging and Interacting Galaxies',
        'Surveys of Galaxies',
        'Outflows, Jets, Feedback',
        'Early-type Galaxies',
        'Galaxy Groups and Clusters',
        'Galaxy Chemistry',
        'Galaxy Centres/Nuclei',
        'Dwaf/Metal-poor Galaxies',
        'Luminous and Ultra-Luminous Infra-Red Galaxies (LIRG & ULIRG)',
        'Giant Molecular Clouds (GMC) Properties'
      ]
    },
    'ism': {
      id: 'ismRadio',
      text: 'ISM, star formation and astrochemisty',
      value: 'ism',
      keywords: [
        'Outflows, Jets, and Ionized Winds',
        'High-mass Star Formation',
        'Intermediate-mass Star Formation',
        'Low-mass Star Formation',
        'Pre-stellar cores, Infra-red Dark Clouds (IRDC)',
        'Astrochemistry',
        'Inter-stellar Medium (ISM)/Molecular Clouds',
        'Photon-Dominated Regions (PDR)/X-Ray Dominated Regions (XDR)',
        'Hll Regions',
        'Magellanic Clouds'
      ]
    },
    'exoplanets': {
      id: 'exoplanetsRadio',
      text: 'Circumstellar disks, exoplanets, and the solar system',
      value: 'exoplanets',
      keywords: [
        'Debris Disks',
        'Disks around Low-mass Stars',
        'Disks around High-mass Stars',
        'Exo-planets',
        'Solar system - Comets',
        'Solar system - Planetary atmospheres',
        'Solar system - Planetary surfaces',
        'Solar system - Trans-Neptunian Objects (TNOs)',
        'Solar system - Asteroids',
      ]
    },
    'stars': {
      id: 'starRadio',
      text: 'Stellar Evolution and the Sun',
      value: 'stars',
      keywords: [
        'The Sun',
        'Main sequence stars',
        'Asymptotic Giant Branch (AGB) Stars',
        'Post-AGB Stars',
        'Hypergiants',
        'Evolved Stars - Shaping/physical structure',
        'Evolved Stars - Chemistry',
        'Cataclysmic stars',
        'Luminous Blue Variables (LBV)',
        'White Dwarfs',
        'Brown Dwarfs',
        'Supernovae (SN) Ejecta',
        'Pulsars and neutron stars',
        'Black holes',
        'Transients'
      ]
    }
  };

  selectedKeywords = 0;

  checkKeywords(option: string, chosenKeywords: HTMLCollection) {
    let chosen = false;
    if (this.selectedKeywords > 0) {
      for (let i = 0; i < chosenKeywords.length; i++) {
        chosen = chosenKeywords.item(i).innerHTML === option;
        if (chosen) break;
      }
    }
    return this.selectedKeywords >= 2 && !chosen;
  }

}
