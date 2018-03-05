import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

/**
 * Source Expected properties component
 */

@Component({
  selector: 'source-expected-properties',
  templateUrl: './expected-source-properties.component.html',
  styleUrls: ['./expected-source-properties.component.css']
})
export class ExpectedSourcePropertiesComponent implements OnInit{

  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
