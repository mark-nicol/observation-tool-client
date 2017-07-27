import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pi-search',
  templateUrl: './pi-search.component.html',
  styleUrls: ['./pi-search.component.css']
})
export class PiSearchComponent implements OnInit {

  INPUT_PLACEHOLDER: string = "Enter Principle Investigator name";

  constructor() {
  }

  ngOnInit() {
  }
}
