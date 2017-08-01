import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})

export class SidenavComponent implements OnInit {

  nodes = [
    {
      id: 1,
      name: 'Project',
      children: [
        {
          id: 2,
          name: 'Proposal',
          children: [
            {
              id: 3,
              name: 'Planned Observing',
              children: [
                {
                  id: 4,
                  name: 'ScienceGoal',
                  children: [
                    {
                      id: 5,
                      name: 'General'
                    },
                    {
                      id: 6,
                      name: 'Field Setup'
                    },
                    {
                      id: 7,
                      name: 'Spectral Setup'
                    },
                    {
                      id: 8,
                      name: 'Calibration Setup'
                    },
                    {
                      id: 9,
                      name: 'Control and Performance'
                    },
                    {
                      id: 10,
                      name: 'Technical Justification'
                    }
                  ]
                }
              ]
            }
          ]
        },

      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
