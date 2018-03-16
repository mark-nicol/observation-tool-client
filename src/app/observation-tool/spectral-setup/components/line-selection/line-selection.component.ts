import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-line-selection',
  templateUrl: './line-selection.component.html',
  styleUrls: ['./line-selection.component.scss']
})
export class LineSelectionComponent implements OnInit {

  @Input() parentForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
