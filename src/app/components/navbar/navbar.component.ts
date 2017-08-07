import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  items = [
    'General',
    'Field Setup',
    'Spectral Setup',
    'Calibration Setup',
    'Control and Performance',
    'Technical Justification'
  ];

  constructor() { }

  ngOnInit() {
  }

}
