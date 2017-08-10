import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  items = [
    {
      title: 'PI Search',
      path: 'pi-entry'
    },
    {
      title: 'Project',
      path: 'project'
    },
    {
      title: 'Proposal',
      path: 'proposal'
    },
    {
      title: 'Planned Observing',
      path: 'plannedObs'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
