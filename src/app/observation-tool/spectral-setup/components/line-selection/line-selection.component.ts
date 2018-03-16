import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {ISpectralLine} from '../../../shared/interfaces/spectral-line.interface';
import {SpectralDataService} from '../../services/spectral-data.service';

@Component({
  selector: 'app-line-selection',
  templateUrl: './line-selection.component.html',
  styleUrls: ['./line-selection.component.scss']
})
export class LineSelectionComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Output() linesSelected = new EventEmitter();
  _splatalogue: ISpectralLine[];
  _selectedLines = [];
  _selectedLineId = null;

  constructor(private spectralDataService: SpectralDataService) {
  }

  ngOnInit() {
    this.spectralDataService.getSplatalogue().subscribe(result => this._splatalogue = result.splice(0, 10));
  }

  addLine() {
    const selectedLine = this._splatalogue.find(x => x.line_id === this._selectedLineId);
    console.log(selectedLine);
    if (selectedLine) {
      this._selectedLines.push(selectedLine);
      this._splatalogue.splice(this._splatalogue.indexOf(selectedLine), 1);
    }
  }

  removeLine() {
    const selectedLine = this._selectedLines.find(x => x.line_id === this._selectedLineId);
    if (selectedLine) {
      this._splatalogue.push(selectedLine);
      this._selectedLines.splice(this._selectedLines.indexOf(selectedLine), 1);
    }
  }

}
