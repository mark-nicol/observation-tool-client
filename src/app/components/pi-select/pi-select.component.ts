import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Response} from "@angular/http";
import {PrimaryInvestigator} from "../../models/primary-investigator";
import {PrimaryInvestigatorService} from "../../services/primary-investigator.service";

@Component({
  selector: 'app-pi-select',
  templateUrl: './pi-select.component.html',
  styleUrls: ['./pi-select.component.css'],
  providers: [PrimaryInvestigatorService]
})

export class PiSelectComponent implements OnInit {
  name: string;
  results: Observable<PrimaryInvestigator[]>;

  constructor(private route: ActivatedRoute, private piService: PrimaryInvestigatorService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['fullName'];
    });
    this.search('fullName', this.name, true);
  }

  refineSearch(strings: string[]) {
    this.search(strings[0], strings[1], false);
  }

  search(variant, string, newSearch) {
    let result = new Observable<Response>();

    if (newSearch)
      result = this.piService.newSearch(variant, string);
    else
      result = this.piService.search(variant, string);

    result.subscribe(response => this.results = response.json().data);
  }

}
