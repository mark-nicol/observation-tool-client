import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {ISpectralLine} from '../../../shared/interfaces/spectral-line.interface';
import {SpectralDataService} from '../../services/spectral-data.service';

@Component({
  selector: 'app-line-selection',
  templateUrl: './line-selection.component.html',
  styleUrls: ['./line-selection.component.scss']
})
export class LineSelectionComponent implements OnInit {

  @Output() linesSelected = new EventEmitter();
  _splatalogue: ISpectralLine[];
  _selectedLines: Observable<ISpectralLine[]>;
  _selectedLine: ISpectralLine = null;
  _activePage = 0;

  filterForm = this.formBuilder.group({
    description: '',
    freqMin: 500,
    freqMax: 1000
  });

  constructor(private spectralDataService: SpectralDataService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.spectralDataService.getSplatalogue().subscribe(result => this._splatalogue = result.filter((x: ISpectralLine, i) => i < 20));
    this._selectedLines = this.spectralDataService.selectedLines;
    this.observeFormChanges();
  }

  addLine() {
    this.spectralDataService.selectLine(this._selectedLine);
  }

  removeLine() {
    this.spectralDataService.removeLine(this._selectedLine);
  }

  observeFormChanges() {
    const debounce = this.filterForm.valueChanges.debounce(() => Observable.interval(1500));
    debounce.subscribe(value => {
      console.log(value);
      this.spectralDataService.getSplatalogue(value).subscribe(result => this._splatalogue = result);
    });
  }


}
