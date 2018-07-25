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

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {ISpectralLine} from '../../../shared/interfaces/spectral-line.interface';
import {SpectralDataService} from '../../services/spectral-data.service';

@Component({
  selector: 'app-line-selection',
  templateUrl: './line-selection.component.html',
  styleUrls: ['./line-selection.component.css']
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
    this.spectralDataService.getSplatalogue(this.filterForm.value).subscribe(result => this._splatalogue = result/*.filter((x: ISpectralLine, i) => i < 20)*/);
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

  log(message: any) {
    console.log(message);
  }

}
