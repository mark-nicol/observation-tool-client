import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'field-center-coordinates',
  templateUrl: './field-center-coordinates.component.html',
  styleUrls: ['./field-center-coordinates.component.css'],
})
export class FieldCenterCoordinatesComponent implements OnInit {


  @Input() tableHeaders: string[] = ['', ''];
  @Input() targetType: string = 'individual';
  radioValue = 'relative';

  constructor() {
  }

  ngOnInit() {
  }

}
