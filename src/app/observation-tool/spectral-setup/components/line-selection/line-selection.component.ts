import { Component, OnInit } from '@angular/core';
import {SpectralDataService} from '../../services/spectral-data.service';

@Component({
  selector: 'app-line-selection',
  templateUrl: './line-selection.component.html',
  styleUrls: ['./line-selection.component.scss']
})
export class LineSelectionComponent implements OnInit {

  constructor(private spectralDataService: SpectralDataService) {
    this.spectralDataService.getSplatalogue().subscribe(result => console.log(result));
  }

  ngOnInit() {
  }

}
