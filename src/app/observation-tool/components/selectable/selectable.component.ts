import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'selectable',
  templateUrl: './selectable.component.html',
  styleUrls: ['./selectable.component.scss']
})

export class SelectableComponent implements OnInit {

  @Input('class')
  classes: any;

  @Input()
  type: any;

  @Input()
  id: any;

  @Input()
  name: any;

  @Input()
  checked: boolean;

  constructor() { }

  ngOnInit() {
  }

}
