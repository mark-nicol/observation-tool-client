import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fcc-rectangular',
  templateUrl: './fcc-rectangular.component.html',
  styleUrls: ['./fcc-rectangular.component.scss']
})
export class FccRectangularComponent implements OnInit {

  @Input()
  radioValue = 'relative';

  constructor() { }

  ngOnInit() {
  }

}
