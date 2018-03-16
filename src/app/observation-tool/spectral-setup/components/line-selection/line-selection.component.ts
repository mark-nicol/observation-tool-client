import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {ISpectralLine} from '../../../shared/interfaces/spectral-line.interface';
import {SpectralDataService} from '../../services/spectral-data.service';

@Component({
  selector: 'app-line-selection',
  templateUrl: './line-selection.component.html',
  styleUrls: ['./line-selection.component.scss']
})
export class LineSelectionComponent implements OnInit {

  // @Input() parentForm: FormGroup;
  @Output() linesSelected = new EventEmitter();
  _splatalogue: ISpectralLine[];
  _selectedLines: Observable<ISpectralLine[]>;
  _selectedLine: ISpectralLine = null;

  constructor(private spectralDataService: SpectralDataService) {
  }

  ngOnInit() {
    this.spectralDataService.getSplatalogue().subscribe(result => this._splatalogue = result.filter((x: ISpectralLine, i) => i < 20));
    this._selectedLines = this.spectralDataService.selectedLines;
  }

  addLine() {
    this.spectralDataService.selectLine(this._selectedLine);
  }

  removeLine() {
    this.spectralDataService.removeLine(this._selectedLine);
  }

}
