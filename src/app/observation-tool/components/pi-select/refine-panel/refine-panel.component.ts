import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-refine-panel',
  templateUrl: './refine-panel.component.html',
  styleUrls: ['./refine-panel.component.css']
})
export class RefinePanelComponent implements OnInit {

  @Output() refineSearch = new EventEmitter<string[]>();
  @Input() name;

  constructor() {
  }

  ngOnInit() {

  }

  refineClick(searchVariant, searchString) {
    this.refineSearch.emit([searchVariant, searchString]);
  }

}
