import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-line-selection',
  templateUrl: './line-selection.component.html',
  styleUrls: ['./line-selection.component.scss']
})
export class LineSelectionComponent implements OnInit {

  @Input() parentForm: FormGroup;

  selectedLineId = null;

  constructor() {
  }

  ngOnInit() {
  }

  get availableLines(): FormArray {
    return this.parentForm.get('availableLines') as FormArray;
  }

  get selectedLines(): FormArray {
    return this.parentForm.get('selectedLines') as FormArray;
  }

  addLine() {

  }

}
