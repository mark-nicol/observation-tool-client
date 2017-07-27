import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ResultsTableComponent } from "./results-table/results-table.component";

@Component({
  selector: 'app-pi-select',
  templateUrl: './pi-select.component.html',
  styleUrls: ['./pi-select.component.css']
})
export class PiSelectComponent implements OnInit {

  @ViewChild(ResultsTableComponent) resultsTable: ResultsTableComponent;

  constructor() {
  }


  ngOnInit() {
  }



}
