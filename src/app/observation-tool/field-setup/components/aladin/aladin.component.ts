import {Component, OnInit} from '@angular/core';

declare let A: any;

@Component({
             selector:    'app-aladin',
             templateUrl: './aladin.component.html',
             styleUrls:   ['./aladin.component.scss']
           })
export class AladinComponent implements OnInit {

  private map;

  constructor() {
  }

  ngOnInit() {
    this.map = A.aladin('#aladin-lite-div', {survey: 'P/DSS2/color', fov: 60, target: 'm31'});
  }

}
