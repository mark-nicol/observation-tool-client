import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {ObsProposal} from '../../../shared/classes/obsproposal';
import {IAlmaInvestigator} from '../../../shared/interfaces/alma-investigator.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';

/**
 * The proposalForm component
 */

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})

export class ProposalComponent implements OnInit {

  proposalForm: FormGroup;
  proposal: Observable<ObsProposal>;

  /** The currently selected proposalForm type */
  chosenType = 'regularRadio';

  /** The available proposalForm types for looping over */
  typeRadios = [
    {
      id: 'Regular',
      text: 'Regular'
    },
    {
      id: 'opportunity',
      text: 'Target of Opportunit'
    },
    {
      id: 'vlbi',
      text: 'VLBI'
    },
    {
      id: 'large',
      text: 'Large Program'
    },
  ];

  /** The currently chosen scientific category radio */
  chosenCategory                        = 'cosmology';
  /** Keys to loop the radios object */
  categoryKeys                          = Object.keys;
  /** The available categories with values and keywords */
  categoryRadios: { [id: string]: any } = {
    'cosmology': {
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

  /** Count of currently selected keywords in the selection box */
  selectedKeywordCount = 0;
  selectedKeywordValues: any;

  log(event) {
    console.log(event);
  }

  constructor(private persistenceService: PersistenceService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.persistenceService.getProposal().subscribe(result => {
      this.proposalForm.patchValue({
        title: result.title,
        cycle: result.cycle,
        abs: result.abstract,
        relatedProposals: result.relatedProposals,
        previousProposals: result.recentPublications,
        studentProject: result.studentProject,
        proposalType: result.proposalTypeString,
        scientificCategory: result.scientificCategoryString,
        duplicateObservations: result.duplicateObservationJustification,
      });
      this.setRows([result.PrincipalInvestigator]);
    });
  }

  createForm() {
    this.proposalForm = this.formBuilder.group({
      title: '',
      cycle: '',
      abs: '',
      relatedProposals: '',
      previousProposals: '',
      studentProject: false,
      proposalType: '',
      scientificCategory: '',
      investigators: this.formBuilder.array([]),
      duplicateObservations: '',
      keywords: []
    });
  }

  setRows(rows: IAlmaInvestigator[]) {
    const rowFormGroups = rows.map(tableRow => this.formBuilder.group(tableRow));
    console.log(rowFormGroups);
    const rowFormArray  = this.formBuilder.array(rowFormGroups);
    this.proposalForm.setControl('investigators', rowFormArray);
  }

  get investigators(): FormArray {
    return this.proposalForm.get('investigators') as FormArray;
  }

  /**
   * Resets the keyword selector when the chosen category changes
   */
  categoryRadioChange(newCategory: string) {
    this.chosenCategory = newCategory;
    // this.project.proposalForm.keywords = null;
  }

}
