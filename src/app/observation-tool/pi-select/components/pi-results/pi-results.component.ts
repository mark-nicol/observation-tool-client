import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {PrimaryInvestigatorService} from '../../services/primary-investigator.service';

/**
 * The PI select component
 *
 * Makes search calls to PrimaryInvestigatorService to based on entered name
 */

@Component({
  selector: 'app-pi-results',
  templateUrl: './pi-results.component.html',
  styleUrls: ['./pi-results.component.css'],
  providers: [PrimaryInvestigatorService]
})

export class PiResultsComponent implements OnInit {

  /** The name to search for */
  name: string;
  /** Results returned by the search service */
  results: any;

  isSearching: boolean;

  /**
   * Constructor
   * @param route     Activated route to extract name from
   * @param piService PI search service used for PI lookup
   */
  constructor(private route: ActivatedRoute, private piService: PrimaryInvestigatorService) {
  }

  /**
   * Takes search name from activated route and makes search call
   */
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['Name'];
    });
    this.search('Name', this.name, true);
  }

  /**
   * Used to refine the search or change search name
   * @param strings String array of search category and term
   */
  refineSearch(strings: string[]) {
    this.search(strings[0], strings[1], false);
  }

  /**
   * Makes search calls to PiSearchService
   * @param variant   The field to search in
   * @param string    The string to search for
   * @param newSearch True if making a new search, previous results will be cleared
   */
  search(variant: string, string: string, newSearch: boolean) {
    this.isSearching = true;
    let result       = new Observable<Response>();
    if (newSearch)
      result = this.piService.newSearch(variant, string);
    else
      result = this.piService.search(variant, string);
    result.subscribe(response => this.results = response.json(),
      (error) => console.log(error),
      () => this.isSearching = false);
  }

}
