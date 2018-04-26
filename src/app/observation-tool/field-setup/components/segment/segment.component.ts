import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-field-setup-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {

  @Input() title: string;

  collapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
