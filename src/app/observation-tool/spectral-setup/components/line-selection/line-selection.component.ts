import { Component, OnInit } from '@angular/core';
import {ISpectralLine} from '../../../shared/interfaces/spectral-line.interface';
import {SpectralDataService} from '../../services/spectral-data.service';

@Component({
  selector: 'app-line-selection',
  templateUrl: './line-selection.component.html',
  styleUrls: ['./line-selection.component.scss']
})
export class LineSelectionComponent implements OnInit {

  catalogue: ISpectralLine[];

  constructor(private spectralDataService: SpectralDataService) {
  }

  ngOnInit() {
    this.catalogue = this.spectralDataService.getSplatalogue().slice(0, 10);
  }

}
