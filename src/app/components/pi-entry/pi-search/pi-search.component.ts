import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PrimaryInvestigator} from "../../../models/primary-investigator";

@Component({
  selector: 'app-pi-search',
  templateUrl: './pi-search.component.html',
  styleUrls: ['./pi-search.component.css']
})

export class PiSearchComponent implements OnInit {

  INPUT_PLACEHOLDER: string = "Enter Principle Investigator name";
  passedPi: PrimaryInvestigator;
  piSearchInput: Input;

  constructor(private activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params.hasOwnProperty('selectedPi'))
        this.passedPi = JSON.parse(sessionStorage.getItem('selectedPi'));
    });
    // If passedPi != null
      // set search box value to name
      // set
  }
}
