import {Component, OnInit} from '@angular/core';
import {Response} from "@angular/http";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {PrimaryInvestigatorService} from "../../services/primary-investigator.service";

@Component({
  selector: 'app-pi-select',
  templateUrl: './pi-select.component.html',
  styleUrls: ['./pi-select.component.css'],
  providers: [PrimaryInvestigatorService]
})

export class PiSelectComponent implements OnInit {
  name: string;
  results: any;
  isSearching: boolean;

  constructor(private route: ActivatedRoute, private piService: PrimaryInvestigatorService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['Name'];
    });
    this.search('Name', this.name, true);
  }

  refineSearch(strings: string[]) {
    this.search(strings[0], strings[1], false);
  }

  search(variant, string, newSearch) {
    this.isSearching = true;
    let result = new Observable<Response>();

    if (newSearch)
      result = this.piService.newSearch(variant, string);
    else
      result = this.piService.search(variant, string);
    result.subscribe(response => this.results = response.json(), (error) =>  console.log(error),() => this.isSearching = false);
  }

}
