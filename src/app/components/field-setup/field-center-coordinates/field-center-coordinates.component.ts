import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'field-center-coordinates',
  templateUrl: './field-center-coordinates.component.html',
  styleUrls: ['./field-center-coordinates.component.css']
})
export class FieldCenterCoordinatesComponent implements OnInit {

  rows = [
    {
      lat: '0.00000',
      lon: '0.00000'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
