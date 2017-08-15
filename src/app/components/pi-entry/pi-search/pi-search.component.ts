import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PrimaryInvestigator} from "../../../models/primary-investigator";

@Component({
  selector: 'app-pi-search',
  templateUrl: './pi-search.component.html',
  styleUrls: ['./pi-search.component.css']
})

export class PiSearchComponent implements OnInit, AfterViewInit {

  INPUT_PLACEHOLDER: string = "Enter Principle Investigator name";
  passedPi: PrimaryInvestigator;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (sessionStorage['selectedPi']) {
      this.passedPi = JSON.parse(sessionStorage.getItem('selectedPi'));
    }
  }

  ngAfterViewInit () {

  }
}
